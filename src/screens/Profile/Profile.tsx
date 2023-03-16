import React, {useContext, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Theme} from '@app/components';
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
};

export const Profile = ({navigation}: any) => {
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
    formState: {errors, isValid},
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      surname: '',
      bDay: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<ProfileFormType> = ({
    firstName,
    lastName,
    surname,
    bDay,
    email,
    phone,
  }: ProfileFormType) => {
    console.warn(firstName, lastName, surname, bDay, email, phone);
  };

  return (
    <View style={[styles.container, stylesThemes.profile]}>
      <View style={styles.header}>
        <AppButtonIcon
          Icon={SvgArrowLeft}
          themeVariant={themeVariant}
          onPress={() => navigation.goBack()}
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
            <Avatar size={160} themeVariant={themeVariant} />
            <View style={styles.wrapButtonCamera}>
              <AppButtonIconCircle
                Icon={SvgCamera}
                themeVariant={themeVariant}
              />
            </View>
          </View>

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
                required: ERROR_MESSAGE.required,
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

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Gender
            </AppText>

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Date of birth
            </AppText>

            <Controller
              control={control}
              rules={{
                required: ERROR_MESSAGE.required,
                validate: checkStringIsEmpty,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <AppInput
                  label="B-day"
                  placeholder="Select date of birth"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  themeVariant={themeVariant}
                  isError={!!errors.bDay}
                  errorMessage={errors.bDay?.message}
                  isSuccess={isValid}
                />
              )}
              name="bDay"
            />

            <AppText
              variant="Body_1_Medium_18"
              style={stylesThemes.profileHeaderText}>
              Account info
            </AppText>

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
                  keyboardType="numeric"
                />
              )}
              name="phone"
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
