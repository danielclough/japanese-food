import { Box, Typography, Stack } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "./MuiNextLink";

const Footer = () => {
  return <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
    <Stack
      direction="row"
      justifyContent="center"
      spacing={4}
      sx={{ mb: 5 }}
    >
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://facebook.com/kikisquilts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook fontSize="large" />
      </MuiNextLink>
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://instagram/kikisquilt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram fontSize="large" />
      </MuiNextLink>

      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter fontSize="large" />
      </MuiNextLink>
    </Stack>
    <Typography align="center" color="common.white">
      © {new Date().getFullYear()}, Japanese Food
    </Typography>
  </Box>;
};

export default Footer;
