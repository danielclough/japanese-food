import React, { useState } from "react";
// styles
import {AppBar, Toolbar, IconButton, Typography, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header({subtotal}) {
    return (
        <AppBar>
            <Toolbar>
                {/* Hamburger */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                {/* Title */}
                <Typography variant="h6">
                    Japanese Food
                </Typography>
                {/* Subtotal */}
                <Button>${subtotal}</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;