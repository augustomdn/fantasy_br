'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MainComponent() {
  const theme = useTheme();

  return (
    <Box
      component={'section'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 4,
        gap: 2,
      }}
    >
      <Stack direction={'column'} spacing={1}>
        <Typography variant="h2" textAlign={'center'}>
          Monte seu time
          <br />
          Domine a liga
        </Typography>
        <Typography variant="body1" color="secondary" textAlign={'center'}>
          O Fantasy dos gramados Brasileiros
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          color="cta"
          sx={{
            fontWeight: 'bold',
            '&:hover': {
              color: theme.palette.text.primary,
            },
          }}
        >
          Jogar
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderColor: theme.palette.cta.main,
            '&:hover': {
              borderColor: theme.palette.primary.main,
            },
          }}
        >
          Saiba Mais
        </Button>
      </Stack>
    </Box>
  );
}
