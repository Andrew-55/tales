import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Theme} from '@app/components';
import {THEMES} from './themes';
import {AppButton, AppButtonIcon, AppInput, AppText, Upload} from '@app/ui';
import {SvgArrowLeft, SvgXmark} from '@app/assets/svg';
import {ERROR_MESSAGE} from '@app/constants';
import {checkStringIsEmpty} from '@app/lib';

export type PhotoType = {
  uri: string;
};

type CreatePostFormType = {
  title: string;
  post: string;
};

export const CreatePost = ({navigation}: any) => {
  const [photo, setPhoto] = useState<PhotoType>();
  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const handleAddImage = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});

    if (result.assets && result.assets[0].uri) {
      console.log(result);
      setPhoto({uri: result.assets[0].uri});
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
      post: '',
    },
  });

  const onSubmit: SubmitHandler<CreatePostFormType> = ({
    title,
    post,
  }: CreatePostFormType) => {
    console.warn(title, post);
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
                  isError={!!errors.post}
                  errorMessage={errors.post?.message}
                  multiline
                />
              )}
              name="post"
            />
          </View>

          <View style={styles.wrapButton}>
            <AppButton
              text="Publish"
              size="Large"
              onPress={handleSubmit(onSubmit)}
              themeVariant={themeVariant}
              isDisabled={!isDirty}
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
