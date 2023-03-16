import {AppButtonDelete} from '@app/ui';
import React, {FC} from 'react';
import {ScrollView, StyleSheet, View, Dimensions} from 'react-native';

type Props = {
  id: string;
  onDeletePost: (id: string) => void;
  children: React.ReactNode | React.ReactNode[];
};
const windowWidth = Dimensions.get('window').width;

export const MyPostCard: FC<Props> = ({id, children, onDeletePost}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal={true}>
      <View style={styles.children}>{children}</View>
      <AppButtonDelete onPress={() => onDeletePost(id)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
  },
  children: {
    width: windowWidth,
  },
});
