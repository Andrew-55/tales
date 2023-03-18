import React, {FC, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppButtonIconText, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {
  SvgArrowRightOnRectangle,
  SvgMoon,
  SvgSun,
  SvgUser,
} from '@app/assets/svg';
import {COLORS} from '@app/assets/styles/constants';
import {Theme, THEME_VARIANT} from '@app/components';

export type AuthorInfoType = {
  avatarUrl: string;
  firstName: string;
  lastName: string;
};

type Props = {
  author: AuthorInfoType;
  onClose: () => void;
  navigation: any;
};

export const AvatarMenu: FC<Props> = ({author, onClose, navigation}) => {
  const {themeVariant, isDarkThemeVariant, handleChangeTheme} =
    useContext(Theme);

  const {avatarUrl, firstName, lastName} = author;
  const stylesThemes = THEMES[themeVariant];

  const handlePressProfile = () => {
    onClose();
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.avatarMenu}>
      <View style={[styles.avatarMenuContent, stylesThemes.avatarMenu]}>
        <View>
          <View style={styles.wrapAvatar}>
            <Avatar
              size={80}
              themeVariant={themeVariant}
              avatarUrl={avatarUrl}
            />
          </View>

          <AppText
            variant="Title_4_Semibold_20"
            style={[styles.name, stylesThemes.avatarMenuText]}>
            {`${firstName} ${lastName}`}
          </AppText>

          <View style={styles.wrapButtons}>
            <View style={styles.wrapNavigateButtons}>
              <AppButtonIconText
                Icon={SvgUser}
                text="Profile"
                themeVariant={themeVariant}
                onPress={handlePressProfile}
              />
              <AppButtonIconText
                Icon={SvgArrowRightOnRectangle}
                text="Exit"
                themeVariant={themeVariant}
                onPress={onClose}
              />
            </View>
          </View>
        </View>

        {isDarkThemeVariant ? (
          <AppButtonIconText
            Icon={SvgSun}
            text="Light theme"
            themeVariant={themeVariant}
            onPress={() => handleChangeTheme(THEME_VARIANT.LIGHT)}
          />
        ) : (
          <AppButtonIconText
            Icon={SvgMoon}
            text="Night theme"
            themeVariant={themeVariant}
            onPress={() => handleChangeTheme(THEME_VARIANT.DARK)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarMenu: {
    position: 'absolute',
    backgroundColor: COLORS.color_802,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  avatarMenuContent: {
    paddingTop: 80,
    paddingBottom: 16,
    width: '75%',
    height: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  wrapAvatar: {
    marginBottom: 12,
  },
  name: {
    marginBottom: 60,
  },
  wrapButtons: {
    height: '70%',
    justifyContent: 'space-between',
  },
  wrapNavigateButtons: {
    rowGap: 32,
    alignItems: 'flex-start',
  },
});
