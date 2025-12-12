'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ThemeWraperProps {
  readonly children: React.ReactNode;
}

// No seu arquivo ThemeWrapper.tsx

const theme = createTheme({
  palette: {
    // ----------------------------------------------------
    // CORES DE FUNDO (BACKGROUND)
    // Usadas por componentes de superfície (Paper, default body)
    background: {
      default: '#0C182A', // Fundo principal da página (body)
      paper: '#172A45', // Fundo de Cards, Modals, Superfícies elevadas
    },

    // ----------------------------------------------------
    // CORES DE TEXTO (TEXT)
    // Definem as cores padrão para textos na maioria dos componentes
    text: {
      primary: '#FFFFFF', // Cor principal do texto (Main Text Color)
      secondary: '#B0B8C8', // Cor de texto secundário (Subtitles, hints)
      disabled: '#6B7A99', // Cor para elementos desativados
    },

    // ----------------------------------------------------
    // CORES DO TEMA E DE AÇÃO
    // Aqui, primary e secondary definem a cor de *elementos*,
    // e o MUI automaticamente calcula o *contrastText* para você.
    primary: {
      main: '#FFFFFF',
      // O texto usado em cima de um primary.main deve ser BLACK (se o main for claro)
      contrastText: '#0C182A', // Exemplo: Se primary for BRANCO, o texto deve ser ESCURO
    },
    secondary: {
      main: '#B0B8C8',
    },
    cta: {
      main: '#61e461ff',
      // Se CTA for um verde/ciano claro, o texto de contraste deve ser escuro
      contrastText: '#000000',
    },

    error: {
      main: '#FF5555',
    },
    warning: {
      main: '#FFB86C',
    },
    info: {
      main: '#8BE9FD',
    },
    success: {
      main: '#50FA7B',
    },
  },
  typography: {
    // 1. Fonte padrão para a maioria dos textos (body, botões)
    fontFamily: ['Inter', 'Roboto', 'Arial', 'sans-serif'].join(','),

    // 2. Sobrescrever todas as variantes de título (h1, h2, h3, etc.)
    h1: {
      fontFamily: ['Montserrat', 'Oswald', 'sans-serif'].join(','),
      fontWeight: 700, // Black ou ExtraBold
      fontSize: '3rem',
      // size e lineHeight viriam aqui
    },
    h2: {
      fontFamily: ['Montserrat', 'Oswald', 'sans-serif'].join(','),
      fontWeight: 500, // Bold/ExtraBold
      fontSize: '2rem',
      // size e lineHeight viriam aqui
    },
    h3: {
      fontFamily: ['Montserrat', 'Oswald', 'sans-serif'].join(','),
      fontWeight: 300, // Bold/ExtraBold
      fontSize: '2rem',
      // size e lineHeight viriam aqui
    },
    // ... repita para h3, h4, h5, h6

    // 3. (Opcional) Ajustar o corpo do texto
    body1: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
    },
    // ...
  },
});

export default function ThemeWrapper({ children }: ThemeWraperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
