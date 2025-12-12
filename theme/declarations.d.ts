// src/theme/declarations.d.ts (ou no topo do seu ThemeWrapper.tsx)

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    cta: Palette['primary'];
  }

  // Permite que as cores personalizadas sejam usadas como 'color' em botões, etc.
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    cta?: PaletteOptions['primary'];
  }
}

// Também importante para componentes como Button ou Chip
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    cta: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    tertiary: true;
    cta: true;
  }
}
