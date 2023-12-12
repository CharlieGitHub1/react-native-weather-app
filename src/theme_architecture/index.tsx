import { colors } from './theme_styles/colors';
import { space, lineHeights } from './theme_styles/spacing';
import { sizes } from './theme_styles/sizes';
import { fonts, fontWeights, fontSizes } from './theme_styles/fonts';

type ThemeTypes = {
  colors: typeof colors;
  space: typeof space;
  lineHeights: typeof lineHeights;
  sizes: typeof sizes;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
};

export const theme: ThemeTypes = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
