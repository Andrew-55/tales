import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {AppButton, AppButtonText, AppInput, AppText} from '@app/ui';
import {THEMES} from './themes';
import {ERROR_MESSAGE} from '@app/constants';
import {checkIsEmail, checkPasswordLength} from '@app/lib';

type RegistrationFormType = {
  email: string;
  password: string;
};

export const Registration = ({navigation}: any) => {
  let themeVariant = 'dark' as 'dark';

  const stylesThemes = THEMES[themeVariant];

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: {errors, isValid, isDirty},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<RegistrationFormType> = ({
    email,
    password,
  }: RegistrationFormType) => {
    console.warn(email, password);
    navigation.navigate('MainTab');
  };

  return (
    <View style={[styles.container, stylesThemes.registration]}>
      <AppText
        variant="Title_3_Semibold_32"
        style={[styles.title, stylesThemes.registrationTitle]}>
        Join to us
      </AppText>
      <AppText
        variant="Body_5_Regular_16"
        style={[styles.description, stylesThemes.registrationText]}>
        You will be able to fully communicate
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
            validate: checkPasswordLength,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Password"
              placeholder="Enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isSecureTextEntry
              themeVariant={themeVariant}
              isError={!!errors.password}
              errorMessage={errors.password?.message}
              isSuccess={isValid}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: ERROR_MESSAGE.required,
            validate: (value: string) => {
              if (watch('password') !== value) {
                return ERROR_MESSAGE.passwordDifferent;
              }
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              label="Confirm password"
              placeholder="Confirm your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isSecureTextEntry
              themeVariant={themeVariant}
              isError={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
              isSuccess={isValid}
            />
          )}
          name="confirmPassword"
        />
      </View>

      <View style={styles.questions}>
        <AppText
          variant="Body_5_Regular_16"
          style={stylesThemes.registrationText}>
          Already have an account?
        </AppText>
        <AppButtonText
          text="Log in"
          themeVariant={themeVariant}
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <AppButton
        text="Continue"
        size="Large"
        onPress={handleSubmit(onSubmit)}
        themeVariant={themeVariant}
        isDisabled={!isDirty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 4,
  },
  description: {
    marginBottom: 40,
  },
  wrapControllers: {
    rowGap: 16,
    marginBottom: 144,
  },
  questions: {
    flexDirection: 'row',
    columnGap: 4,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
