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

type TypographyKeyType =
  | 'Title_1_Regular_55pf'
  | 'Title_2_Medium_32pt'
  | 'Title_3_Semibold_32pt'
  | 'Headline_1_Semibold_18pt'
  | 'Headline_2_Semibold_14pt'
  | 'Caption_1_Medium_12pt'
  | 'Body_1_Medium_18pt'
  | 'Body_2_Medium_16pt'
  | 'Body_3_Medium_14pt'
  | 'Body_4_Regular_18pt'
  | 'Body_5_Regular_16pt'
  | 'Body_6_Regular_14pt';

export const TYPOGRAPHY: Record<TypographyKeyType, TypographyValueType> = {
  Title_1_Regular_55pf: {
    fontFamily: 'Nokwy',
    fontSize: 55,
    lineHeight: 54,
    fontWeight: '400',
  },
  Title_2_Medium_32pt: {
    fontFamily: 'Outfit-Medium',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
  },
  Title_3_Semibold_32pt: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '600',
  },
  Headline_1_Semibold_18pt: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  Headline_2_Semibold_14pt: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  Caption_1_Medium_12pt: {
    fontFamily: 'Outfit-Medium',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
  },
  Body_1_Medium_18pt: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '500',
  },
  Body_2_Medium_16pt: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  Body_3_Medium_14pt: {
    fontFamily: 'Outfit-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  Body_4_Regular_18pt: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '400',
  },
  Body_5_Regular_16pt: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  Body_6_Regular_14pt: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
};
