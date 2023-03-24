import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {useMutation} from '@apollo/client';
import {AppButton, AppButtonText, AppInput, AppText} from '@app/ui';
import {THEMES} from './themes';
import {ERROR_MESSAGE} from '@app/constants';
import {checkIsEmail, checkPasswordLength, setTokenStore} from '@app/lib';
import {Theme} from '@app/components';
import {REGISTRATION, UserSignUpResponseType} from '@app/graphql';
import {NAVIGATION_SCREEN} from '..';

type RegistrationFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = ({navigation}: any) => {
  const {themeVariant} = useContext(Theme);
  const [createUser, {loading, error, data}] =
    useMutation<UserSignUpResponseType>(REGISTRATION);
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

  const handleRegistration = async ({
    email,
    password,
    confirmPassword,
  }: RegistrationFormType) => {
    await createUser({
      variables: {input: {email, password, confirmPassword}},
    });

    if (error) {
      Toast.show({type: 'info', text1: ERROR_MESSAGE.somethingWrong});
    }

    if (data?.userSignUp.token) {
      await setTokenStore(data.userSignUp.token);
      navigation.navigate(NAVIGATION_SCREEN.MAIN_TAB);
    } else if (data?.userSignUp.problem.message) {
      Toast.show({type: 'error', text1: data?.userSignUp.problem.message});
    } else {
      Toast.show({type: 'error', text1: ERROR_MESSAGE.wrongEmailPassword});
    }
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<RegistrationFormType> = ({
    email,
    password,
    confirmPassword,
  }: RegistrationFormType) => {
    handleRegistration({email, password, confirmPassword});
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
        isLoading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 4,
  },
  description: {
    marginBottom: 40,
  },
  wrapControllers: {
    rowGap: 16,
    marginBottom: 70,
  },
  questions: {
    flexDirection: 'row',
    columnGap: 4,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
