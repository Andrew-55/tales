import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  TextInputProps,
} from 'react-native';
import {AppText} from '../AppText';
import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {THEMES} from './themes';
import {SvgCheck, SvgEye, SvgEyeSlash} from '@app/assets/svg';

type Props = TextInputProps & {
  isSecureTextEntry?: boolean;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  placeholder: string;
  label: string;
  value?: string;
  themeVariant: keyof typeof THEMES;
};

export const AppInput: FC<Props> = ({
  label,
  placeholder,
  isDisabled = false,
  isSuccess,
  isError,
  errorMessage,
  isSecureTextEntry = false,
  value = '',
  themeVariant,
  ...props
}) => {
  const [isSecurity, setIsSecurity] = useState(isSecureTextEntry);
  const hasValue = value.trim().length > 0;

  const stylesThemes = THEMES[themeVariant];

  const getColorInput = () => {
    switch (true) {
      case isDisabled:
        return stylesThemes.appInput.isDisable;
      case isSuccess:
        return stylesThemes.appInput.isSuccess;
      case isError:
        return stylesThemes.appInput.isError;
      case hasValue:
        return stylesThemes.appInput.isValue;
      default:
        return stylesThemes.appInput.initial;
    }
  };

  return (
    <>
      <View style={[styles.container]}>
        <AppText
          variant="Headline_2_Semibold_14"
          style={[stylesThemes.appInputLabel]}>
          {label}
        </AppText>

        <TextInput
          style={[styles.input, getColorInput()]}
          editable={!isDisabled}
          value={value}
          placeholder={placeholder}
          secureTextEntry={isSecurity}
          placeholderTextColor={stylesThemes.appInputPlaceholderColor}
          {...props}
        />

        <View style={styles.wrapSvg}>
          {isSecureTextEntry ? (
            <Pressable
              onPress={() => setIsSecurity(prev => !prev)}
              disabled={isDisabled}>
              {isSecurity ? (
                <SvgEyeSlash color={getColorInput().color} />
              ) : (
                <SvgEye color={getColorInput().color} />
              )}
            </Pressable>
          ) : (
            isSuccess && (
              <SvgCheck
                width={18}
                height={16}
                color={stylesThemes.appInput.isSuccess.color}
              />
            )
          )}
        </View>
      </View>

      {errorMessage && (
        <AppText
          variant="Body_6_Regular_14"
          style={{color: stylesThemes.appInput.isError.color}}>
          {errorMessage}
        </AppText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    ...TYPOGRAPHY.Body_5_Regular_16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 28,
    borderBottomWidth: 1.5,
  },
  wrapSvg: {
    position: 'absolute',
    right: 0,
    bottom: 16,
  },
});
