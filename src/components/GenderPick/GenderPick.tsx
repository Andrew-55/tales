import React, {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {TYPOGRAPHY} from '@app/assets/styles/constants';
import {THEMES} from './themes';
import {ThemeVariantType} from '@app/components';

enum GENDER {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

type Props = {
  currentGender?: string | null;
  themeVariant: ThemeVariantType;
  onChooseGender: (value: string) => void;
};

export const GenderPick: FC<Props> = ({
  themeVariant,
  onChooseGender,
  currentGender,
}) => {
  const stylesThemes = THEMES[themeVariant];
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    {
      id: GENDER.MALE,
      label: 'Male',
      color: stylesThemes.genderPickText.color,
      labelStyle: {...styles.labelStyle, ...stylesThemes.genderPickText},
      selected: GENDER.MALE === currentGender,
      onPress: handlePressRadiobutton,
    },
    {
      id: GENDER.FEMALE,
      label: 'Female',
      color: stylesThemes.genderPickText.color,
      labelStyle: {...styles.labelStyle, ...stylesThemes.genderPickText},
      selected: GENDER.FEMALE === currentGender,
      onPress: id => handlePressRadiobutton(id),
    },
  ]);

  function handlePressRadiobutton(id: string) {
    onChooseGender(id);
  }

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
      containerStyle={styles.radio}
    />
  );
};

const styles = StyleSheet.create({
  radio: {
    alignItems: 'flex-start',
  },
  labelStyle: {
    ...TYPOGRAPHY.Body_5_Regular_16,
  },
});
