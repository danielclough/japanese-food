import Image from "next/image";
import { Container, Box } from "@mui/material";

const SectionImage = ({imgSrc, imgAlt}) => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: "0",
        width: "100%",
        height: "30vh",
        overflow: "hidden",
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .3)",
        }}
      />
    </Box>
  );
};

export default SectionImage
