import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {COLORS, TYPOGRAPHY} from '@app/assets/styles/constants';
import {
  SvgArrowLeft,
  SvgArrowRightOnRectangle,
  SvgBookmark,
  SvgCamera,
  SvgCheck,
  SvgCheckCircle,
  SvgCloudArrowUp,
  SvgCopy,
  SvgEye,
  SvgEyeSlash,
  SvgHeart,
  SvgHome,
  SvgLoading,
  SvgMoon,
  SvgPhoto,
  SvgPlus,
  SvgShare,
  SvgSun,
  SvgTrash,
  SvgUser,
  SvgXmark,
} from '@app/assets/svg';

export const UiKit = () => {
  return (
    <View style={styles.container}>
      <Text>COLORS Black</Text>
      <View style={styles.blackBlock} />
      <Text>COLORS Error</Text>
      <View style={styles.errorColor} />
      <Text>Icons</Text>
      <View style={styles.wrapIcons}>
        <SvgCheckCircle />
        <SvgHeart />
        <SvgHeart
          fill={COLORS.icon_light_mode}
          stroke={COLORS.icon_light_mode}
        />
        <SvgShare />
        <SvgShare fill={COLORS.icon_light_mode} />
        <SvgPhoto />
        <SvgPhoto fill={COLORS.icon_light_mode} />
        <SvgBookmark />
        <SvgBookmark
          fill={COLORS.icon_light_mode}
          stroke={COLORS.icon_light_mode}
        />
        <SvgHome />
        <SvgHome fill={COLORS.icon_light_mode} />
        <SvgCopy />
        <SvgUser />
        <SvgArrowRightOnRectangle />
        <SvgMoon />
        <SvgPlus />
        <SvgPlus stroke={COLORS.icon_light_mode} />
        <SvgCamera />
        <SvgTrash />
        <SvgLoading />
        <SvgXmark />
        <SvgCheck />
        <SvgPhoto fill={COLORS.color_100} />
        <SvgXmark width={20} height={20} stroke={COLORS.color_700} />
        <SvgXmark width={13} height={13} stroke={COLORS.color_700} />
        <SvgArrowLeft />
        <SvgEye />
        <SvgEyeSlash />
        <SvgXmark width={13} height={13} stroke={COLORS.error} />
        <SvgCheck width={14} height={12} />
        <SvgCloudArrowUp />
        <SvgUser
          width={64}
          height={80}
          fill={COLORS.color_600}
          stroke={COLORS.color_600}
        />
        <SvgEye fill={COLORS.color_400} />
        <SvgEyeSlash fill={COLORS.color_400} />
        <SvgSun />
      </View>
      <Text style={styles.titleOneRegular55}>Title_1_Regular_55pt</Text>
      <Text style={styles.titleTwoMedium32}>Title_2_Medium_32pt</Text>
      <Text style={styles.titleThreeSemibold32}>Title_3_Semibold_32pt</Text>
      <Text style={styles.bodyFiveRegular16}>Body_5_Regular_16pt</Text>
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
  wrapIcons: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLORS.color_300,
  },
  titleOneRegular55: TYPOGRAPHY.Title_1_Regular_55pf,
  titleTwoMedium32: TYPOGRAPHY.Title_2_Medium_32pt,
  titleThreeSemibold32: TYPOGRAPHY.Title_3_Semibold_32pt,
  bodyFiveRegular16: TYPOGRAPHY.Body_5_Regular_16pt,
});
