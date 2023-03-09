import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {COLORS} from '@app/assets/styles/constants';
import {AppButton, AppText} from '@app/ui';

export const Main = ({navigation}: any) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <AppText variant="Title_1_Regular_55" color="color_100">
          Main
        </AppText>
        <AppButton
          text="Go to UiKit"
          size="Large"
          themeVariant="dark"
          onPress={() => navigation.navigate('UiKit')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: COLORS.color_700,
  },
});
