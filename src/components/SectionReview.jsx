import { Container, Grid, Typography } from "@mui/material";
import Review from "./ReviewCard";

const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Customer Reviews
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12}>
          <Review
            title="Alex"
            profileLetter="AL"
            text="I never taste something like this before. Japanese mix Western
            cuisine. Some good, some weird taste to me. Overall the cooking tastes
            good."
          />
          <Review
            title="Alex"
            profileLetter="AL"
            text="I never taste something like this before. Japanese mix Western
            cuisine. Some good, some weird taste to me. Overall the cooking tastes
            good."
          />
          <Review
            title="Alex"
            profileLetter="AL"
            text="I never taste something like this before. Japanese mix Western
            cuisine. Some good, some weird taste to me. Overall the cooking tastes
            good."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;

