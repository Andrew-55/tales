import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {AppButton, AppButtonText, AppInput, AppText} from '@app/ui';
import {THEMES} from './themes';
import {ERROR_MESSAGE} from '@app/constants';
import {checkIsEmail} from '@app/lib';

type LoginFormType = {
  email: string;
  password: string;
};

export const Login = ({navigation}: any) => {
  let themeVariant = 'dark' as 'dark';

  const stylesThemes = THEMES[themeVariant];

  const {
    control,
    handleSubmit,
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

  const onSubmit: SubmitHandler<LoginFormType> = ({
    email,
    password,
  }: LoginFormType) => {
    console.warn(email, password);
    navigation.navigate('MainTab');
  };

  return (
    <View style={[styles.container, stylesThemes.login]}>
      <AppText
        variant="Title_3_Semibold_32"
        style={[styles.title, stylesThemes.loginTitle]}>
        Log in
      </AppText>
      <AppText
        variant="Body_5_Regular_16"
        style={[styles.description, stylesThemes.loginText]}>
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
      </View>

      <View style={styles.questions}>
        <AppText variant="Body_5_Regular_16" style={stylesThemes.loginText}>
          No account?
        </AppText>
        <AppButtonText
          text="Register"
          themeVariant={themeVariant}
          onPress={() => navigation.navigate('Registration')}
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
