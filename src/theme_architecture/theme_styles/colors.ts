// Purpose: To define a multi-layered color scheme for the application.

type ColorTypes = {
  [key: string]: string;
};

type ColorScheme = {
  brand: ColorTypes;
  ui: ColorTypes;
  bg: ColorTypes;
  text: ColorTypes;

  [key: string]: ColorTypes;
};

export type Theme = {
  light: ColorScheme;
  dark: ColorScheme;
  custom: ColorScheme;

  [key: string]: ColorScheme;
};

export const themes: Theme = {
  light: {
    brand: {
      primary: '#2182BD',
      secondary: '#5282BD',
      muted: '#C6DAF7',
    },
    ui: {
      primary: '#262626',
      secondary: '#757575',
      tertiary: '#F1F1F1',
      quaternary: '#FFFFFF',
      disabled: '#DEDEDE',
      error: '#D0421B',
      success: '#138000',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F1F1F1',
    },
    text: {
      primary: '#262626',
      secondary: '#757575',
      disabled: '#9C9C9C',
      inverse: '#FFFFFF',
      error: '#D0421B',
      success: '#138000',
    },
  },
  dark: {
    brand: {
      primary: '#1a5276',
      secondary: '#3f729b',
      muted: '#6fa5d4',
    },
    ui: {
      primary: '#f2f2f2',
      secondary: '#8c8c8c',
      tertiary: '#1a1a1a',
      quaternary: '#000000',
      disabled: '#3a3a3a',
      error: '#ff5733',
      success: '#228b22',
    },
    bg: {
      primary: '#1a1a1a',
      secondary: '#2c2c2c',
    },
    text: {
      primary: '#f2f2f2',
      secondary: '#8c8c8c',
      disabled: '#bfbfbf',
      inverse: '#1a1a1a',
      error: '#ff5733',
      success: '#228b22',
    },
  },
  custom: {
    brand: {
      primary: '#e74c3c',
      secondary: '#f39c12',
      muted: '#f9d4ac',
    },
    ui: {
      primary: '#2c3e50',
      secondary: '#95a5a6',
      tertiary: '#e0e0e0',
      quaternary: '#ecf0f1',
      disabled: '#bdc3c7',
      error: '#e74c3c',
      success: '#27ae60',
    },
    bg: {
      primary: '#34495e',
      secondary: '#ecf0f1',
    },
    text: {
      primary: '#bdc3c7',
      secondary: '#7f8c8d',
      disabled: '#95a5a6',
      inverse: '#2c3e50',
      error: '#e74c3c',
      success: '#27ae60',
    },
  },
};

export const color = (colorKey: string, variant: string = 'primary') => {
  return ({ theme }: { theme: Theme }) => theme[variant][colorKey];
};

export const theme = (themeKey: string = 'light') => {
  return themes[themeKey];
};
