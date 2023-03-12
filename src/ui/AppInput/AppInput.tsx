import React, {FC} from 'react';
import {View, StyleSheet, TextInput, ViewStyle, StyleProp} from 'react-native';
import {AppText} from '../AppText';
import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {THEMES} from './themes';

type Props = {
  isSecureTextEntry?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  label: string;
  value?: string;
  styleView?: StyleProp<ViewStyle>;
  themeVariant: keyof typeof THEMES;
};

export const AppInput: FC<Props> = ({
  label,
  placeholder,
  isDisabled = false,
  isSecureTextEntry = false,
  value = '',
  themeVariant,
}) => {
  const [valueInput, setValueInput] = React.useState(value);
  const hasValue = valueInput.trim().length > 0;

  const stylesThemes = THEMES[themeVariant];

  return (
    <View style={[styles.container, stylesThemes.appInput]}>
      <AppText
        variant="Headline_2_Semibold_14"
        style={[stylesThemes.appInputLabel]}>
        {label}
      </AppText>
      <TextInput
        style={[
          styles.input,
          stylesThemes.appInput.initial,
          isDisabled && stylesThemes.appInput.isDisable,
          hasValue && stylesThemes.appInput.isValue,
        ]}
        editable={!isDisabled}
        onChangeText={setValueInput}
        value={valueInput}
        placeholder={placeholder}
        secureTextEntry={isSecureTextEntry}
        placeholderTextColor={stylesThemes.appInputPlaceholderColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    ...TYPOGRAPHY.Body_5_Regular_16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomWidth: 1.5,
  },
});
