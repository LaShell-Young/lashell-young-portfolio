import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { projects } from "../data/content.jsx";
import ContactSection from "./ContactSection.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function PortfolioPage() {
  return (
    <>
      <Box component="section" className="page-intro">
        <Typography className="eyebrow">SELECTED WORK</Typography>
        <Typography variant="h1" component="h1">
          Games built with <Box component="span">curiosity.</Box>
        </Typography>
        <Typography color="text.secondary">
          A few of my early experiments in Unity. More projects are on the way.
        </Typography>
      </Box>
      <Box component="section" className="portfolio-section" aria-label="Game projects">
        <Box className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Box>
      </Box>
      <Box className="portfolio-cta">
        <Typography variant="h4" component="h2">
          Let&apos;s make something meaningful.
        </Typography>
        <Button
          href="./index.html#contactSection"
          variant="contained"
          endIcon={<ArrowForwardRounded />}
        >
          Get in touch
        </Button>
      </Box>
      <ContactSection />
    </>
  );
}
