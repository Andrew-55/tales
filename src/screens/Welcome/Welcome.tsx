import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';

import {AppButton, AppButtonText, AppText} from '@app/ui';
import {THEME_VARIANT} from '@app/components';
import {COLORS} from '@app/assets/styles/constants';
import {getTokenStore} from '@app/lib';

export const Welcome = ({navigation}: any) => {
  const isAuth = async () => {
    const token = await getTokenStore();
    if (token) {
      navigation.navigate('MainTab');
    }
  };

  isAuth();

  return (
    <View style={styles.container}>
      <ImageBackground source={require('@app/assets/image/image46_2x.webp')}>
        <View style={styles.content}>
          <View>
            <AppText
              variant="Title_1_Regular_55"
              color="color_700"
              style={[styles.title, styles.titleFirst]}>
              SHARE
            </AppText>

            <AppText
              variant="Title_1_Regular_55"
              color="color_700"
              style={[styles.title, styles.titleSecond]}>
              YOUR TALE
            </AppText>
          </View>

          <View style={styles.wrapButton}>
            <View style={styles.question}>
              <AppText variant="Body_5_Regular_16" color="color_100">
                Already have an account?
              </AppText>

              <AppButtonText
                text="Log in"
                themeVariant={THEME_VARIANT.DARK}
                onPress={() => navigation.navigate('Login')}
              />
            </View>

            <AppButton
              text="Create an account"
              size="Large"
              themeVariant={THEME_VARIANT.DARK}
              onPress={() => navigation.navigate('Registration')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: '100%',
    paddingTop: 95,
    paddingBottom: 50,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: COLORS.primary_default_light_mode,
  },
  titleFirst: {
    marginLeft: 36,
    transform: [{rotate: '-3.22deg'}],
  },
  titleSecond: {
    marginLeft: 8,
    transform: [{rotate: '-8.9deg'}],
  },
  question: {
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  wrapButton: {
    flexShrink: 1,
    alignContent: 'center',
  },
});
