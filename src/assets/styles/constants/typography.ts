type TypographyValueType = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight:
    | '400'
    | '500'
    | '600'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '700'
    | '800'
    | '900'
    | undefined;
};

export type TextVariants =
  | 'Title_1_Regular_55'
  | 'Title_2_Medium_32'
  | 'Title_3_Semibold_32'
  | 'Headline_1_Semibold_18'
  | 'Headline_2_Semibold_14'
  | 'Caption_1_Medium_12'
  | 'Body_1_Medium_18'
  | 'Body_2_Medium_16'
  | 'Body_3_Medium_14'
  | 'Body_4_Regular_18'
  | 'Body_5_Regular_16'
  | 'Body_6_Regular_14';

export const TYPOGRAPHY: Record<TextVariants, TypographyValueType> = {
  Title_1_Regular_55: {
    fontFamily: 'Nokwy',
    fontSize: 55,
    lineHeight: 54,
    fontWeight: '400',
  },
  Title_2_Medium_32: {
    fontFamily: 'Outfit-Medium',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
  },
  Title_3_Semibold_32: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
  },
  Headline_1_Semibold_18: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  Headline_2_Semibold_14: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  Caption_1_Medium_12: {
    fontFamily: 'Outfit-Medium',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
  },
  Body_1_Medium_18: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '500',
  },
  Body_2_Medium_16: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  Body_3_Medium_14: {
    fontFamily: 'Outfit-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  Body_4_Regular_18: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '400',
  },
  Body_5_Regular_16: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  Body_6_Regular_14: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
};
