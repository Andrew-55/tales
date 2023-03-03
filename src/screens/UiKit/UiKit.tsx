import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS} from '@app/assets/styles/constants';

export const UiKit = () => {
  return (
    <View style={styles.container}>
      <Text>COLORS Black</Text>
      <View style={styles.blackBlock} />
      <Text>COLORS Error</Text>
      <View style={styles.errorColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  blackBlock: {
    width: 'auto',
    height: 10,
    backgroundColor: COLORS.color_700,
  },
  errorColor: {
    width: 'auto',
    height: 10,
    backgroundColor: COLORS.error,
  },
});
