'use client';
import { Box } from '@mui/material';
import FooterComponent from '../footer/FooterComponent';
import HeaderComponent from '../header/HeaderComponent';

interface AppStructureProps {
  readonly children: React.ReactNode;
}

export default function AppStructure({ children }: AppStructureProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderComponent />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <FooterComponent />
    </Box>
  );
}
