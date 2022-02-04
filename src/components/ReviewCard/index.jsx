import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
  Grid
} from "@mui/material";
import { red } from "@mui/material/colors";

const Review = ({title, profileLetter, text}) => {
  return (
    <Grid
      container
      item
      justifyContent="center"
      xs={12}
      sm={6}
      md={4}
      m={1}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Profile letter">
              {profileLetter}
            </Avatar>
          }
          title={title}
        />
        <CardContent>
          <Rating value={5} readOnly />

          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;