import { Container, Grid } from "@mui/material";
import Hero from '../src/components/Hero'
import SectionAbout from '../src/components/SectionAbout';
import SectionImage from '../src/components/SectionImage';
import SectionReview from '../src/components/SectionReview';
import NavigationCard from '../src/components/NavigationCard';

const Homepage = () => {
  return (
    <Container>
      <Hero
        title="Japanese Food"
        subtitle="F*ck Yeah"
        imgSrc="/images/hero.jpg"
        imgAlt=""
      />
      <SectionAbout
        text1="Japanese Food"
        text2="Traditional Japanese food in your home."        
        text3="Learn More"        
        imgSrc="/images/sushi-6x8.jpg"
        imgAlt="Sushi"
      />
      <SectionImage 
        imgSrc="/images/sushi-6x8.jpg"
        imgAlt="Sushi"
      />
      <SectionReview
      />

      <SectionImage 
        imgSrc="/images/sushi-6x8.jpg"
        imgAlt="Sushi"
      />
      
      <Grid container>
        <NavigationCard
          imgSrc="/images/menu.jpg"
          imgAlt="food menu"
          title="Build Your Own"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
          pagePath="./menu"
          ctaText="Check Out"
        />
        <NavigationCard
          imgSrc="/images/menu.jpg"
          imgAlt="food menu"
          title="Made To Order"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
          pagePath="./menu"
          ctaText="Check Out"
        />
        <NavigationCard
          imgSrc="/images/menu.jpg"
          imgAlt="food menu"
          title="Omakase"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
          pagePath="./menu"
          ctaText="Check Out"
        />
      </Grid>
    </Container>
  );
};

export default Homepage;