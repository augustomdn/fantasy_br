'use client';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function MainComponent() {
  const theme = useTheme();

  return (
    <>
      <Box
        component={'main'}
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
        <Stack direction={'column'}>
          <Typography
            sx={{
              color: theme.palette.primary.main,
            }}
            variant="h2"
            textAlign={'center'}
          >
            Monte seu time
            <br />
            Domine a liga
          </Typography>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
            }}
            variant="body1"
            textAlign={'center'}
          >
            O Fantasy dos gramados Brasileiros
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Button
            sx={{
              backgroundColor: theme.palette.cta.main,
            }}
          >
            Jogar
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: theme.palette.cta.main,
            }}
          >
            Saiba Mais
          </Button>
        </Stack>
      </Box>
    </>
  );
}
