'use client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ThemeWraperProps {
  readonly children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
  typography: {},
});

export default function ThemeWrapper({ children }: ThemeWraperProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
