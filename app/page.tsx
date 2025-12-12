'use client';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        color: theme.palette.primary.main,
      }}
      variant="h3"
    >
      Olá amigos!
    </Typography>
  );
}
