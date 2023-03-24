import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import dayjs from 'dayjs';
import Toast from 'react-native-toast-message';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {AddAvatar, DatePick, GenderPick, Loading, Theme} from '@app/components';
import {THEMES} from './themes';
import {
  AppButtonIcon,
  AppButtonIconCircle,
  AppButtonText,
  AppInput,
  AppText,
  Avatar,
} from '@app/ui';
import {SvgArrowLeft, SvgCamera} from '@app/assets/svg';
import {ERROR_MESSAGE} from '@app/constants';
import {checkIsEmail, checkStringIsEmpty} from '@app/lib';
import {useMutation, useQuery} from '@apollo/client';
import {
  EDIT_PROFILE,
  GET_FAVORITE_POSTS,
  GET_MY_POSTS,
  GET_POSTS,
  UserEditProfile,
  UserType,
  USER_ME,
} from '@app/graphql';
import {FILE_CATEGORY, saveImageToS3} from '@app/services';

type ProfileFormType = {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
};

type PhotoType = {
  fileName: string;
  uri: string;
};

export const Profile = ({navigation}: any) => {
  const [isAddAvatarVisible, setIsAddAvatarVisible] = useState(false);
  const [isDatePickVisible, setIsDatePickVisible] = useState(false);
  const [photo, setPhoto] = useState<PhotoType>();
  const {data: userData} = useQuery<UserType>(USER_ME);
  const [editProfile, {loading, error, data: dataProfile}] =
    useMutation<UserEditProfile>(EDIT_PROFILE, {
      refetchQueries: [
        {query: USER_ME},
        {query: GET_FAVORITE_POSTS},
        {query: GET_POSTS},
        {query: GET_MY_POSTS},
      ],
    });

  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  if (error) {
    Toast.show({type: 'info', text1: ERROR_MESSAGE.somethingWrong});
  }

  let avatarUrl = photo?.uri || userData?.userMe.avatarUrl;

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      firstName: userData?.userMe.firstName || '',
      lastName: userData?.userMe.lastName || '',
      middleName: userData?.userMe.middleName || '',
      gender: userData?.userMe.gender || '',
      birthDate: userData?.userMe.birthDate || '',
      email: userData?.userMe.email || '',
      phone: userData?.userMe.phone || '',
      country: userData?.userMe.country || '',
    },
  });

  const addPhoto = (result: ImagePickerResponse) => {
    setIsAddAvatarVisible(false);
    if (result.assets && result.assets[0].uri && result.assets[0].fileName) {
      setPhoto({
        fileName: result.assets[0].fileName,
        uri: result.assets[0].uri,
      });
    }
  };
  const handlePressTakePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
    });
    addPhoto(result);
  };

  const handlePressChoosePhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    addPhoto(result);
  };

  const handlePressDeletePhoto = () => {
    setIsAddAvatarVisible(false);
    setPhoto(undefined);
  };

  const handleChooseDate = (date: Date) => {
    setValue('birthDate', dayjs(date).format('YYYY-MM-DD'));
  };

  const handleChooseGender = (value: string) => {
    setValue('gender', value);
  };

  const handleEditProfile = async (profile: ProfileFormType) => {
    if (photo && photo.fileName) {
      try {
        avatarUrl = await saveImageToS3(
          photo.fileName,
          FILE_CATEGORY.AVATARS,
          photo.uri,
        );
      } catch (err) {
        Toast.show({type: 'error', text1: ERROR_MESSAGE.somethingWrong});
      }
    }
    await editProfile({
      variables: {input: {...profile, avatarUrl}},
    });
    if (dataProfile?.userEditProfile.problem) {
      Toast.show({
        type: 'info',
        text1: dataProfile?.userEditProfile.problem.message,
      });
    }
  };

  const onSubmit: SubmitHandler<ProfileFormType> = (
    profile: ProfileFormType,
  ) => {
    handleEditProfile(profile);
  };

  return (
    <View style={[styles.container, stylesThemes.profile]}>
      <View style={styles.header}>
        <AppButtonIcon
          Icon={SvgArrowLeft}
          themeVariant={themeVariant}
          onPress={() => navigation.navigate('MainTab')}
        />

        <AppText
          variant="Headline_1_Semibold_18"
          style={[styles.title, stylesThemes.profileHeaderText]}>
          Profile
        </AppText>

        <AppButtonText
          text="Done"
          themeVariant={themeVariant}
          onPress={handleSubmit(onSubmit)}
        />
      </View>

      <View style={styles.content}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.wrapAvatar}>
            <Avatar
              size={160}
              themeVariant={themeVariant}
              avatarUrl={avatarUrl}
            />
            <View style={styles.wrapButtonCamera}>
              <AppButtonIconCircle
                Icon={SvgCamera}
                themeVariant={themeVariant}
                onPress={() => setIsAddAvatarVisible(true)}
              />
            </View>
          </View>

          <View>
            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Personal info
            </AppText>
            <View style={styles.wrapControllers}>
              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                  validate: checkStringIsEmpty,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="First name"
                    placeholder="Enter your first name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.firstName}
                    errorMessage={errors.firstName?.message}
                    isSuccess={isValid}
                  />
                )}
                name="firstName"
              />

              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                  validate: checkStringIsEmpty,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="Last name"
                    placeholder="Enter your last name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                    isSuccess={isValid}
                  />
                )}
                name="lastName"
              />

              <Controller
                control={control}
                rules={{
                  validate: checkStringIsEmpty,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="Surname"
                    placeholder="Enter your surname"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.middleName}
                    errorMessage={errors.middleName?.message}
                    isSuccess={isValid}
                  />
                )}
                name="middleName"
              />
            </View>

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Gender
            </AppText>
            <View style={styles.wrapControllers}>
              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.requiredChoose,
                }}
                render={() => (
                  <GenderPick
                    currentGender={
                      userData?.userMe.gender && userData?.userMe.gender
                    }
                    onChooseGender={handleChooseGender}
                    themeVariant={themeVariant}
                  />
                )}
                name="gender"
              />
              {!!errors.gender && (
                <AppText variant="Body_6_Regular_14" color="error">
                  {errors.gender?.message}
                </AppText>
              )}
            </View>

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Date of birth
            </AppText>
            <View style={styles.wrapControllers}>
              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                }}
                render={({field: {onBlur, value}}) => (
                  <AppInput
                    label="B-day"
                    placeholder="Select date of birth"
                    onBlur={onBlur}
                    value={value}
                    onPressIn={() => setIsDatePickVisible(true)}
                    themeVariant={themeVariant}
                    isError={!!errors.birthDate}
                    errorMessage={errors.birthDate?.message}
                    isSuccess={isValid}
                    caretHidden
                  />
                )}
                name="birthDate"
              />
            </View>

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Account info
            </AppText>
            <View style={styles.wrapControllers}>
              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                  validate: checkIsEmail,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="Email"
                    placeholder="Enter your e-mail"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.email}
                    errorMessage={errors.email?.message}
                    isSuccess={isValid}
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                  validate: checkStringIsEmpty,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="Phone number"
                    placeholder="Enter your phone number"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.phone}
                    errorMessage={errors.phone?.message}
                    isSuccess={isValid}
                    keyboardType="phone-pad"
                  />
                )}
                name="phone"
              />

              <Controller
                control={control}
                rules={{
                  required: ERROR_MESSAGE.required,
                  validate: checkStringIsEmpty,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <AppInput
                    label="Country"
                    placeholder="Enter your country"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    themeVariant={themeVariant}
                    isError={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                    isSuccess={isValid}
                  />
                )}
                name="country"
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {isAddAvatarVisible && (
        <AddAvatar
          themeVariant={themeVariant}
          onClose={() => setIsAddAvatarVisible(false)}
          onPressTakePhoto={handlePressTakePhoto}
          onPressDeletePhoto={handlePressDeletePhoto}
          onPressChoosePhoto={handlePressChoosePhoto}
        />
      )}

      {isDatePickVisible && (
        <DatePick
          themeVariant={themeVariant}
          onPress={handleChooseDate}
          onClose={() => setIsDatePickVisible(false)}
          currentDate={userData?.userMe.birthDate}
        />
      )}

      {loading && <Loading message="Updating ..." />}
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
    flex: 1,
    paddingHorizontal: 16,
  },
  wrapAvatar: {
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  wrapButtonCamera: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  wrapControllers: {
    paddingTop: 24,
    rowGap: 16,
    marginBottom: 52,
  },
});
