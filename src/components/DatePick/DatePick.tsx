import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {COLORS} from '@app/assets/styles/constants';
import {AppButton, AppText} from '@app/ui';
import {THEMES} from './themes';
import {ThemeVariantType} from '@app/components';

type Props = {
  currentDate?: string | null;
  themeVariant: ThemeVariantType;
  onPress: (date: Date) => void;
  onClose: () => void;
};

export const DatePick: FC<Props> = ({
  themeVariant,
  onPress,
  onClose,
  currentDate = '',
}) => {
  const [date, setDate] = useState(new Date());

  const stylesThemes = THEMES[themeVariant];

  const handleConfirm = () => {
    onPress(date);
    onClose();
  };

  useEffect(() => {
    if (currentDate) {
      setDate(new Date(currentDate));
    }
  }, [currentDate]);

  return (
    <Modal transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={[styles.container]}>
        <View style={[styles.datePick, stylesThemes.datePick]}>
          <AppText
            variant="Body_2_Medium_16"
            style={{color: stylesThemes.datePickText}}>
            Pick the date of your birth
          </AppText>
          <View style={[styles.line, stylesThemes.datePickTitleLine]} />
          <DatePicker
            date={date}
            maximumDate={new Date()}
            onDateChange={setDate}
            mode="date"
            textColor={stylesThemes.datePickText}
            fadeToColor={stylesThemes.datePick.backgroundColor}
            locale="en"
          />
        </View>
        <View style={[styles.wrapButton]}>
          <AppButton
            text="Confirm"
            size="Medium"
            themeVariant={themeVariant}
            onPress={handleConfirm}
            styleView={styles.buttonConfirm}
          />
          <View style={[styles.line, stylesThemes.datePickTitleLine]} />
          <AppButton
            text="Cancel"
            size="Medium"
            themeVariant={themeVariant}
            onPress={onClose}
            styleView={styles.buttonCancel}
            isDelete
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 8,
    rowGap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.color_802,
    blurRadius: 5,
  },
  datePick: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    rowGap: 16,
    opacity: 1,
  },
  wrapButton: {
    width: '100%',
  },
  buttonConfirm: {
    borderRadius: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonCancel: {
    borderRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  line: {
    width: '100%',
    height: 1,
  },
});
