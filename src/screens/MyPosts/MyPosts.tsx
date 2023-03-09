import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {COLORS} from '@app/assets/styles/constants';
import {AppText} from '@app/ui';

export const MyPosts = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <AppText variant="Title_1_Regular_55" color="color_100">
          My Posts
        </AppText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.color_700,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
