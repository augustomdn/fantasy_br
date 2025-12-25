import { Box, Button, Toolbar, Typography, AppBar } from "@mui/material";

export default function AppBarComponent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar sx={{ gap: 1 }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ICON
                    </Typography>
                    <Button href="/sign-in" color="inherit" variant="outlined" >Login</Button>
                    <Button href="/register" color="inherit" variant="contained" sx={{ backgroundColor: 'secondary.main' }}>Registre-se</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};