import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MuiNextLink from "./MuiNextLink";
import Button from "@mui/material/Button";


const SectionAbout = ({imgSrc, imgAlt, text1, text2, text3}) => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={600}
            height={800}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: '25%' }} container flexDirection="column" justifyContent="center" alignItems="center">
          <Typography component="h2" variant="h4"  textAlign="center" gutterBottom>
            {text1}
          </Typography>
          <Typography textAlign="center">
            {text2}
          </Typography>
          <MuiNextLink href="/about-us">
            <Button sx={{ ml: '50%', mt: '1rem' }} variant="outlined" size="large">
              {text3}
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;

