import {
  LinkedIn,
  LocationOnOutlined,
  NorthEastRounded,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading.jsx";

export default function ContactSection() {
  return (
    <Box component="section" id="contactSection" className="contact-section">
      <SectionHeading eyebrow="LET'S CONNECT" title="Have a project in mind?" />
      <Stack className="contact-card" direction={{ xs: "column", sm: "row" }} spacing={2.5}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          <LocationOnOutlined color="primary" />
          <Typography color="text.secondary">Texas, US</Typography>
        </Stack>
        <Button
          component="a"
          href="https://www.linkedin.com/in/lashell-young"
          target="_blank"
          rel="noreferrer"
          startIcon={<LinkedIn />}
          endIcon={<NorthEastRounded />}
          variant="contained"
        >
          Connect on LinkedIn
        </Button>
      </Stack>
    </Box>
  );
}
