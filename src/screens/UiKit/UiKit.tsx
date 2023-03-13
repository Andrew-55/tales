import React, {useState} from 'react';
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

import {
  AppText,
  AppButton,
  AppButtonTextIcon,
  AppButtonText,
  AppButtonDelete,
  AppButtonIconText,
  AppButtonIcon,
  AppButtonIconCircle,
  AppButtonIconCircleBlack,
  AppTab,
  Upload,
  AppInput,
} from '@app/ui';
import {DatePick, CardPost} from '@app/components';

export const UiKit = ({navigation}: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDark, setIsDark] = useState(true);
  let themeVariant = isDark ? ('dark' as 'dark') : ('light' as 'light');

  const handleDatePickConfirm = (date: Date) => {
    console.log(date);
    setIsModalVisible(false);
  };

  const authorInfo = {
    avatarUrl:
      'https://img.joomcdn.net/e2743c4f00221d5e82b693127f7d75c0413852be_original.jpeg',
    firstName: 'Hanna',
    lastName: 'King',
  };

  const post = {
    id: 'string568567',
    title: 'Apple love',
    createdAt: '12.03.2023',
    likesCount: 137,
    mediaUrl: 'https://img.freepik.com/free-photo/mountains-lake_1398-1150.jpg',
    authorInfo: authorInfo,
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={[
          styles.container,
          {backgroundColor: `${isDark ? '#131313' : '#fff'}`},
        ]}>
        <AppInput
          themeVariant={themeVariant}
          label="Name"
          placeholder="Enter your name"
          value="Hanna"
        />

        <AppInput
          themeVariant={themeVariant}
          label="Email"
          placeholder="Enter your e-mail"
        />

        <AppInput
          themeVariant={themeVariant}
          label="Email"
          placeholder="Enter your e-mail"
          value="email@.com"
          isSuccess
        />

        <AppInput
          themeVariant={themeVariant}
          label="Email"
          placeholder="Enter your e-mail"
          value="email@com"
          isError
          errorMessage="Enter correct e-mail"
        />

        <AppInput
          themeVariant={themeVariant}
          label="Password"
          placeholder="Enter password"
          isSecureTextEntry
        />

        <CardPost post={post} themeVariant={themeVariant} />
        <AppButton
          text="Open Modal"
          size="Medium"
          themeVariant={themeVariant}
          onPress={() => setIsModalVisible(true)}
        />

        {isModalVisible && (
          <DatePick
            themeVariant={themeVariant}
            onPress={date => handleDatePickConfirm(date)}
            onClose={() => setIsModalVisible(false)}
          />
        )}
        <AppTab
          themeVariant={themeVariant}
          onPressNew={() => {}}
          onPressTop={() => {}}
        />
        <AppButton
          text="Main"
          themeVariant="dark"
          size="Large"
          onPress={() => navigation.navigate('MainTab')}
        />
        <Upload themeVariant={themeVariant} />
        <View style={styles.wrapIcons}>
          <AppButtonIconCircle Icon={SvgCamera} themeVariant="dark" />
          <AppButtonIconCircle Icon={SvgCamera} themeVariant="light" />
          <AppButtonIconCircle
            Icon={SvgCamera}
            themeVariant="dark"
            isDisabled
          />
          <AppButtonIconCircle
            Icon={SvgPlus}
            padding={16}
            themeVariant="light"
          />
          <AppButtonIconCircle
            Icon={SvgPlus}
            padding={16}
            themeVariant="dark"
          />
          <AppButtonIconText
            text="Profile"
            Icon={SvgUser}
            themeVariant="dark"
          />
          <AppButtonIconText
            text="Night theme"
            Icon={SvgMoon}
            themeVariant="light"
            onPress={() => setIsDark(prev => !prev)}
          />
          <AppButtonIconCircleBlack Icon={SvgXmark} themeVariant="dark" />
          <AppButtonIconCircleBlack Icon={SvgXmark} themeVariant="light" />
          <AppButtonIconCircleBlack
            Icon={SvgXmark}
            themeVariant="light"
            isDisabled
          />
        </View>
        <View style={styles.wrapIcons}>
          <AppButtonIcon Icon={SvgHeart} themeVariant="dark" />
          <AppButtonIcon Icon={SvgShare} themeVariant="light" />
          <AppButtonIcon
            width={20}
            height={20}
            Icon={SvgXmark}
            isDisabled
            themeVariant="light"
          />
        </View>
        <Text>COLORS Black</Text>
        <View style={styles.blackBlock} />
        <Text>COLORS Error</Text>
        <View style={styles.errorColor} />
        <Text>Icons</Text>
        <View style={styles.wrapIcons}>
          <SvgCheckCircle />
          <SvgHeart />
          <SvgHeart color={COLORS.primary_default_light_mode} />
          <SvgShare />
          <SvgShare color={COLORS.primary_default_light_mode} />
          <SvgPhoto />
          <SvgPhoto color={COLORS.primary_default_light_mode} />
          <SvgBookmark />
          <SvgBookmark color={COLORS.primary_default_light_mode} />
          <SvgHome />
          <SvgHome color={COLORS.primary_default_light_mode} />
          <SvgCopy />
          <SvgUser />
          <SvgArrowRightOnRectangle />
          <SvgMoon />
          <SvgPlus />
          <SvgPlus color={COLORS.primary_default_light_mode} />
          <SvgCamera />
          <SvgTrash />
          <SvgLoading />
          <SvgXmark />
          <SvgCheck />
          <SvgPhoto color={COLORS.color_100} />
          <SvgXmark width={20} height={20} color={COLORS.color_700} />
          <SvgXmark width={13} height={13} color={COLORS.color_700} />
          <SvgArrowLeft />
          <SvgEye />
          <SvgEyeSlash />
          <SvgXmark width={13} height={13} color={COLORS.error} />
          <SvgCheck width={14} height={12} />
          <SvgCloudArrowUp />
          <SvgUser width={64} height={80} color={COLORS.color_600} />
          <SvgEye color={COLORS.color_400} />
          <SvgEyeSlash color={COLORS.color_400} />
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
        <AppButtonDelete />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 8,
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
    backgroundColor: COLORS.color_250,
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
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
});
