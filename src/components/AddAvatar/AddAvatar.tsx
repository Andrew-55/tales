import React, {FC} from 'react';
import {StyleSheet, View, Modal} from 'react-native';

import {COLORS} from '@app/assets/styles/constants';
import {AppButton} from '@app/ui';
import {THEMES} from './themes';
import {ThemeVariantType} from '@app/components';

type Props = {
  themeVariant: ThemeVariantType;
  onClose: () => void;
  onPressTakePhoto: () => void;
  onPressDeletePhoto: () => void;
  onPressChoosePhoto: () => void;
};

export const AddAvatar: FC<Props> = ({
  themeVariant,
  onPressTakePhoto,
  onPressChoosePhoto,
  onPressDeletePhoto,
  onClose,
}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <Modal transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={[styles.container]}>
        <View style={[styles.wrapButton]}>
          <AppButton
            text="Take a photo"
            size="Medium"
            themeVariant={themeVariant}
            onPress={onPressTakePhoto}
            styleView={styles.buttonTake}
          />
          <View style={[styles.line, stylesThemes.addAvatarTitleLine]} />
          <AppButton
            text="Choose from the library"
            size="Medium"
            themeVariant={themeVariant}
            onPress={onPressChoosePhoto}
            styleView={styles.buttonChoose}
          />
          <View style={[styles.line, stylesThemes.addAvatarTitleLine]} />
          <AppButton
            text="Delete photo"
            size="Medium"
            themeVariant={themeVariant}
            onPress={onPressDeletePhoto}
            styleView={styles.buttonDelete}
            isDelete
          />
        </View>
        <View style={[styles.wrapButton]}>
          <AppButton
            text="Cancel"
            size="Medium"
            themeVariant={themeVariant}
            onPress={onClose}
            styleView={styles.buttonCancel}
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
    justifyContent: 'flex-end',
    backgroundColor: COLORS.color_802,
    blurRadius: 5,
  },
  datePick: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    rowGap: 16,
  },
  wrapButton: {
    width: '100%',
  },
  buttonTake: {
    borderRadius: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  buttonChoose: {
    borderRadius: 0,
  },
  buttonDelete: {
    borderRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  buttonCancel: {
    borderRadius: 16,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
  },
});
