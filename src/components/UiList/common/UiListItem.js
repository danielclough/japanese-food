import React, { useState } from "react";
// data
import frozen from '../../../data/frozen'
// styles
import {Typography, Paper, Button, Grid} from "@mui/material";
import Image from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function UiListItem({serviceStyle, setServiceStyle, choose, title, description, imgSrc, imgAlt, type, price, per}) {

    return (
        <Paper elevation={3} id={title} className={type} sx={{margin:"1rem"}}>
            {imgSrc && <Image src={imgSrc} alt={imgAlt} width="400px" height="500px" />}

            <Grid
                justifyContent="center"
                alignItems="center"
                width="400px" 
                height="150px"
            >
                <Grid
                    width="400px" 
                    height="25px"
                >
                    <Typography px={5} py={1}>
                        {title}
                    </Typography>
                    <Typography p={1}>
                        {description}
                    </Typography>
                    <Button onClick={() => choose([type, title, price])}>
                        ${price}{per && `/${per}`} <AddShoppingCartIcon fontSize="medium" />
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default UiListItem;