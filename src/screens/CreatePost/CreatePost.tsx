import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useMutation} from '@apollo/client';
import {Theme} from '@app/components';
import {THEMES} from './themes';
import {AppButton, AppButtonIcon, AppInput, AppText, Upload} from '@app/ui';
import {SvgArrowLeft, SvgXmark} from '@app/assets/svg';
import {ERROR_MESSAGE, LIMIT_REQUEST} from '@app/constants';
import {checkStringIsEmpty} from '@app/lib';
import {FILE_CATEGORY, saveImageToS3} from '@app/services';
import {
  CreatePostType,
  CREATE_POST,
  GET_MY_POSTS,
  GET_POSTS,
} from '@app/graphql';
import {TYPE_REQUEST} from '../Main/Main';

export type PhotoType = {
  fileName: string;
  uri: string;
};

type CreatePostFormType = {
  title: string;
  description: string;
};

export const CreatePost = ({navigation}: any) => {
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];
  const [photo, setPhoto] = useState<PhotoType>();
  const [createPost, {loading, error}] = useMutation<CreatePostType>(
    CREATE_POST,
    {
      update(cache, {data: postCreated}) {
        if (postCreated) {
          const data = cache.readQuery({
            query: GET_MY_POSTS,
            variables: {input: {limit: LIMIT_REQUEST.myPosts}},
          });
          cache.writeQuery({
            query: GET_MY_POSTS,
            variables: {input: {limit: LIMIT_REQUEST.myPosts}},
            data: {
              myPosts: {
                __typename: 'FindMyPostsPaginationResponse',
                data: data.myPosts.data
                  ? [postCreated.postCreate, ...data.myPosts.data]
                  : [postCreated.postCreate],
              },
            },
          });

          const dataPosts = cache.readQuery({
            query: GET_POSTS,
            variables: {
              input: {limit: LIMIT_REQUEST.posts, type: TYPE_REQUEST.NEW},
            },
          });
          cache.writeQuery({
            query: GET_POSTS,
            variables: {
              input: {limit: LIMIT_REQUEST.posts, type: TYPE_REQUEST.NEW},
            },
            data: {
              posts: {
                __typename: 'FindPostsPaginationResponse',
                data: dataPosts.posts.data
                  ? [postCreated.postCreate, ...dataPosts.posts.data]
                  : [postCreated.postCreate],
              },
            },
          });
        }
      },
    },
  );

  if (error) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.somethingWrong});
    console.log(JSON.stringify(error));
  }

  const handleAddImage = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});

    if (result.assets && result.assets[0].uri && result.assets[0].fileName) {
      setPhoto({
        fileName: result.assets[0].fileName,
        uri: result.assets[0].uri,
      });
    }
  };

  const handleAddPost = async (title: string, description: string) => {
    if (photo && photo.fileName) {
      try {
        const mediaUrl = await saveImageToS3(
          photo.fileName,
          FILE_CATEGORY.POSTS,
          photo.uri,
        );

        await createPost({
          variables: {input: {title, description, mediaUrl}},
        });
      } catch (err) {
        Toast.show({type: 'info', text1: ERROR_MESSAGE.somethingWrong});
      }
    } else {
      Toast.show({type: 'info', text1: ERROR_MESSAGE.addPhoto});
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty},
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit: SubmitHandler<CreatePostFormType> = ({
    title,
    description,
  }: CreatePostFormType) => {
    handleAddPost(title, description);
  };

  return (
    <View style={[styles.container, stylesThemes.createPost]}>
      <View style={styles.header}>
        <AppButtonIcon
          Icon={SvgArrowLeft}
          themeVariant={themeVariant}
          onPress={navigation.goBack}
        />

        <AppText
          variant="Headline_1_Semibold_18"
          style={[styles.title, stylesThemes.createPost]}>
          Create post
        </AppText>

        <AppButtonIcon Icon={SvgXmark} themeVariant={themeVariant} />
      </View>

      <View style={styles.content}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Upload
            uri={photo?.uri}
            themeVariant={themeVariant}
            onPress={handleAddImage}
          />

          <View style={styles.wrapControllers}>
            <Controller
              control={control}
              rules={{
                required: ERROR_MESSAGE.required,
                validate: checkStringIsEmpty,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AppInput
                  label="Title"
                  placeholder="Enter title of post"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  themeVariant={themeVariant}
                  isError={!!errors.title}
                  errorMessage={errors.title?.message}
                />
              )}
              name="title"
            />

            <Controller
              control={control}
              rules={{
                required: ERROR_MESSAGE.required,
                validate: checkStringIsEmpty,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AppInput
                  label="Post"
                  placeholder="Enter your post"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  themeVariant={themeVariant}
                  isError={!!errors.description}
                  errorMessage={errors.description?.message}
                  multiline
                />
              )}
              name="description"
            />
          </View>

          <View style={styles.wrapButton}>
            <AppButton
              text="Publish"
              size="Large"
              onPress={handleSubmit(onSubmit)}
              themeVariant={themeVariant}
              isDisabled={!isDirty}
              isLoading={loading}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    columnGap: 16,
    alignItems: 'center',
    marginBottom: 48,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  wrapControllers: {
    paddingTop: 24,
    rowGap: 16,
    marginBottom: 52,
  },
  wrapButton: {
    marginBottom: 100,
  },
});
