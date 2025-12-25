'use client';

import { createTheme } from "@mui/material/styles";
import { Roboto } from 'next/font/google';
import Link from "next/link";

// Configuração da fonte via Next.js (Otimizada)
const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    // 1. COLOR PALLETE
    palette: {
        primary: {
            main: '#3F7B70'
        },
        secondary: {
            main: '#265A5C',
        },
        background: {
            default: '#113C4A',
            paper: '#EFECE9',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#2A324B'
        }
    },

    // 2. TIPOGRAFIA
    typography: {
        fontFamily: roboto.style.fontFamily,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1rem', // Tamanho padrão de parágrafos
            lineHeight: 1.5,
        },
        button: {
            textTransform: 'none', // Remove o ALL CAPS padrão dos botões
        },
    },

    // 4. BREAKPOINTS (Responsividade)
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                LinkComponent: Link,
            },
        },
    },
});

export default theme;