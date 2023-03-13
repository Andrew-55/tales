import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppButtonIcon, AppText, Avatar} from '@app/ui';
import {THEMES} from './themes';
import {SvgHeart, SvgShare} from '@app/assets/svg';
import {AuthorInfoType} from '../CardPost/CardPost';

type PostType = {
  isLiked?: boolean;
  likesCount: number;
  authorInfo: AuthorInfoType;
};

type Props = {
  aboutPost: PostType;
  themeVariant: keyof typeof THEMES;
};

export const AboutPost: FC<Props> = ({aboutPost, themeVariant}) => {
  const stylesThemes = THEMES[themeVariant];

  return (
    <View style={styles.container}>
      <View style={styles.authorInfo}>
        <Avatar
          size={24}
          themeVariant={themeVariant}
          avatarUrl={aboutPost.authorInfo.avatarUrl}
        />
        <AppText variant="Body_6_Regular_14" style={stylesThemes.aboutPostText}>
          {`${aboutPost.authorInfo.firstName} ${aboutPost.authorInfo.lastName[0]}.`}
        </AppText>
      </View>

      <View style={styles.wrapButtons}>
        <View style={styles.likes}>
          <AppButtonIcon
            Icon={SvgHeart}
            themeVariant={themeVariant}
            isActive={aboutPost.isLiked}
          />
          <AppText
            variant="Body_6_Regular_14"
            style={stylesThemes.aboutPostLikeColor}>
            {aboutPost.likesCount}
          </AppText>
        </View>
        <AppButtonIcon Icon={SvgShare} themeVariant={themeVariant} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  wrapButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  likes: {
    flexDirection: 'row',
    columnGap: 8,
  },
});
