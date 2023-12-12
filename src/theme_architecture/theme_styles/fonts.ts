type FontTypes = {
  body: string;
  heading: string;
  monospace: string;
};

type FontWeightTypes = {
  regular: number;
  medium: number;
  bold: number;
};

type FontSizeTypes = {
  caption: string;
  button: string;
  body: string;
  title: string;
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
};

export const fonts: FontTypes = {
  body: 'Oswald_400Regular',
  heading: 'Lato_400Regular',
  monospace: 'Oswald_400Regular',
};

export const fontWeights: FontWeightTypes = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes: FontSizeTypes = {
  caption: '12px',
  button: '14px',
  body: '16px',
  title: '20px',
  h5: '24px',
  h4: '34px',
  h3: '45px',
  h2: '56px',
  h1: '112px',
};
