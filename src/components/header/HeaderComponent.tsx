'use client';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Link,
  Stack,
  Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const navItems = ['Monte Seu Time', 'Regras', 'Tabela', 'Login'];

export default function HeaderComponent() {
  const theme = useTheme();

  return (
    // 1. O AppBar AINDA DEVE SER LARGURA TOTAL e STICKY
    <AppBar
      component={'header'}
      position="sticky"
      sx={{
        // Fundo transparente ou da cor da página para que o conteúdo apareça por baixo
        bgcolor: 'transparent',
        boxShadow: 'none', // Sem sombra na barra total
        p: 2, // Padding vertical no topo da tela para "soltar" o header
      }}
    >
    </AppBar>
    // O restante do componente...
  );
}
