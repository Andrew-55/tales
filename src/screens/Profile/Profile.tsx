import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import dayjs from 'dayjs';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {AddAvatar, DatePick, GenderPick, Theme} from '@app/components';
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

export type PhotoType = {
  uri: string;
};

type ProfileFormType = {
  firstName: string;
  lastName: string;
  surname: string;
  bDay: string;
  email: string;
  phone: string;
  country: string;
  gender: string;
};

export const Profile = ({navigation}: any) => {
  const [isAddAvatarVisible, setIsAddAvatarVisible] = useState(false);
  const [isDatePickVisible, setIsDatePickVisible] = useState(false);
  const [photo, setPhoto] = useState<PhotoType>();

  const {themeVariant} = useContext(Theme);
  const stylesThemes = THEMES[themeVariant];

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      surname: '',
      gender: '',
      bDay: '',
      email: '',
      phone: '',
      country: '',
    },
  });

  const addPhoto = (result: ImagePickerResponse) => {
    setIsAddAvatarVisible(false);
    if (result.assets && result.assets[0].uri) {
      console.log(result);
      setPhoto({uri: result.assets[0].uri});
    }
  };
  const handlePressTakePhoto = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    addPhoto(result);
  };

  const handlePressChoosePhoto = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    addPhoto(result);
  };

  const handlePressDeletePhoto = () => {
    setIsAddAvatarVisible(false);
    setPhoto(undefined);
  };

  const handleChooseDate = (date: Date) => {
    setValue('bDay', dayjs(date).format('DD.MM.YYYY'));
  };

  const handleChooseGender = (value: string) => {
    setValue('gender', value);
  };

  const onSubmit: SubmitHandler<ProfileFormType> = ({
    firstName,
    lastName,
    surname,
    bDay,
    email,
    phone,
    country,
    gender,
  }: ProfileFormType) => {
    console.warn(
      firstName,
      lastName,
      surname,
      bDay,
      email,
      phone,
      country,
      gender,
    );
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
              avatarUrl={photo?.uri}
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
                    isError={!!errors.surname}
                    errorMessage={errors.surname?.message}
                    isSuccess={isValid}
                  />
                )}
                name="surname"
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
                    isError={!!errors.bDay}
                    errorMessage={errors.bDay?.message}
                    isSuccess={isValid}
                    caretHidden
                  />
                )}
                name="bDay"
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
        />
      )}
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
