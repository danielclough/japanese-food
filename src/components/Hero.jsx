import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const Hero = ({imgSrc, imgAlt, title, subtitle}) => {
    return (
        <Grid
            component="section"
            container
            sx={{
                mb: 110,
            }}
        >
            <Image src={imgSrc} alt={imgAlt} layout="fill" width="100vw" height="100vh" objectFit="cover" placeholder="blur" />
            <Grid
                container
                sx={{
                    inset: 0,
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0, .5)",
                }}
            ></Grid>
            <Grid
                container
                item
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    inset: 0,
                    position: "absolute",
                }}
                >
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                    color: "secondary.main",
                    fontWeight: 400,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    component="p"
                    variant="h3"
                    align="center"
                    color="common.white"
                    sx={{
                    mb: 10,
                    }}
                >
                    {subtitle}
                </Typography>
                <Typography component="p" variant="h6" color="secondary" gutterBottom>
                    Scroll
                </Typography>
                <ArrowDownward fontSize="large" color="secondary" />
            </Grid>
        </Grid>

    );
}
 
export default Hero;
``