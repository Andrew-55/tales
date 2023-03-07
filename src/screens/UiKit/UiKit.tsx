import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

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

import {AppText, AppButton, AppButtonTextIcon, AppButtonText} from '@app/ui';

export const UiKit = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
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
            fill={COLORS.primary_default_light_mode}
            stroke={COLORS.primary_default_light_mode}
          />
          <SvgShare />
          <SvgShare fill={COLORS.primary_default_light_mode} />
          <SvgPhoto />
          <SvgPhoto fill={COLORS.primary_default_light_mode} />
          <SvgBookmark />
          <SvgBookmark
            fill={COLORS.primary_default_light_mode}
            stroke={COLORS.primary_default_light_mode}
          />
          <SvgHome />
          <SvgHome fill={COLORS.primary_default_light_mode} />
          <SvgCopy />
          <SvgUser />
          <SvgArrowRightOnRectangle />
          <SvgMoon />
          <SvgPlus />
          <SvgPlus stroke={COLORS.primary_default_light_mode} />
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
        <AppText variant="Headline_1_Semibold_18" color="color_500">
          App Text Headline_1_Semibold_18
        </AppText>
        <AppText variant="Caption_1_Medium_12" color="primary_pressed_dark">
          App Text Caption_1_Medium_12
        </AppText>
        <View style={styles.wrapButtons}>
          <AppButton
            text="Continue"
            size="Large"
            themeVariant="dark"
            onPress={() => {}}
          />
          <AppButton
            text="Continue"
            size="Large"
            isDisabled
            themeVariant="dark"
            onPress={() => {}}
          />
          <AppButton
            text="Continue"
            size="Large"
            isLoading
            isDisabled
            themeVariant="dark"
            onPress={() => {}}
          />
          <AppButton
            text="Medium"
            size="Medium"
            isDelete
            themeVariant="dark"
            onPress={() => {}}
          />
          <AppButton
            text="Medium"
            size="Medium"
            isDisabled
            themeVariant="dark"
            onPress={() => {}}
          />
          <AppButton
            text="Small"
            size="Small"
            themeVariant="dark"
            onPress={() => {}}
          />
        </View>
        <View style={styles.wrapButtons}>
          <AppButton
            text="Continue"
            size="Large"
            themeVariant="light"
            onPress={() => {}}
          />
          <AppButton
            text="Continue"
            size="Large"
            isDisabled
            themeVariant="light"
            onPress={() => {}}
          />
          <AppButton
            text="Continue"
            size="Large"
            isLoading
            isDisabled
            themeVariant="light"
            onPress={() => {}}
          />
          <AppButton
            text="Medium"
            size="Medium"
            isDelete
            themeVariant="light"
            onPress={() => {}}
          />
          <AppButton
            text="Small"
            size="Small"
            themeVariant="light"
            onPress={() => {}}
          />
        </View>
        <View style={styles.wrapButtons}>
          <AppButtonTextIcon text="Copy" Icon={SvgCopy} themeVariant="dark" />
          <AppButtonTextIcon
            text="Copy"
            Icon={SvgCopy}
            themeVariant="light"
            isDisabled
          />
          <AppButtonTextIcon text="Copy" Icon={SvgCopy} themeVariant="light" />
        </View>
        <View style={styles.wrapButtonsText}>
          <AppButtonText text="Copy" themeVariant="dark" />
          <AppButtonText text="Copy" themeVariant="light" />
          <AppButtonText text="Copy" isDisabled themeVariant="dark" />
        </View>
      </View>
    </ScrollView>
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
  titleOneRegular55: TYPOGRAPHY.Title_1_Regular_55,
  titleTwoMedium32: TYPOGRAPHY.Title_2_Medium_32,
  titleThreeSemibold32: TYPOGRAPHY.Title_3_Semibold_32,
  bodyFiveRegular16: TYPOGRAPHY.Body_5_Regular_16,
  wrapButtons: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  wrapButtonsText: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});
