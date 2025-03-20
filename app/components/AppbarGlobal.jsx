import { AutoStories } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { navItems } from "../constants/AppBarGlobal";
import { Box } from "@mui/material";
import Link from "next/link";



//16 pixeles por cda una 
//md : pantallas medianas en adelante
//xs: pantallas chicas
//Box para englobar los botones 
const AppbarGlobal = () => {

    return (
        <AppBar position="static" sx={{ mb: 2 }} >
            <Toolbar>
                <AutoStories sx={{ display: { xs: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component={Link}
                    href="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: '700',
                        letterSpacing: '0.2rem'
                    }}

                >  Bookshelft </Typography>
                <Box sx={{ ml: 'auto', display: { xs: 'block' } }}>

                    {navItems.map((item) =>
                        <Button key={item.label} component={Link} href={item.path} color="inherit">  {item.label} </Button>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );

}

export default AppbarGlobal;