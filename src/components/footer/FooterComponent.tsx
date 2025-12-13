'use client';
import { Box, Typography, Container, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const APP_VERSION = 'v1.0.0-beta';

export default function FooterComponent() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        minWidth: '100%',
        borderTop: `1px solid ${theme.palette.secondary.main}30`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Informações de Direitos Autorais */}
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Fantasy BR
          </Typography>

          {/* Versão do Projeto */}
          <Typography variant="caption" color="inherit" sx={{ mt: 0.5 }}>
            Versão: {APP_VERSION}
          </Typography>

          {/* Exemplo de Link */}
          <Link href="#" color="inherit" variant="caption" sx={{ mt: 1 }}>
            Política de Privacidade
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
