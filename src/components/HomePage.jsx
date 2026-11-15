import { useState } from "react";
import {
  ArrowForwardRounded,
  LocationOnOutlined,
  MenuBookRounded,
  ShuffleRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import portrait from "../../images/portrait.png";
import portraitTwo from "../../images/portrait2.png";
import portraitThree from "../../images/portrait3.png";
import { skillGroups } from "../data/content.jsx";
import ContactSection from "./ContactSection.jsx";
import SectionHeading from "./SectionHeading.jsx";

const portraits = [portrait, portraitTwo, portraitThree];

export default function HomePage() {
  const [portraitIndex, setPortraitIndex] = useState(0);

  const changePortrait = () => {
    setPortraitIndex((current) => (current + 1) % portraits.length);
  };

  return (
    <>
      <Box component="section" className="hero">
        <Box className="hero-copy">
          <Chip
            className="availability-chip"
            label="Curious by nature. Software developer by choice."
            size="small"
            variant="outlined"
          />
          <Typography variant="h1" component="h1" className="hero-title">
            Hi, I&apos;m <Box component="span">LaShell Young.</Box>
          </Typography>
          <Typography className="hero-subtitle">
            A passionate software developer with a bachelor's degree in computer science and proficiency in
            frontend (React, JS, Typescript, Node) and backend (Java, SpringBoot, SQL, Python) development.
            Developing software that touches people in meaningful ways is always my main goal.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} className="hero-actions">
            <Button
              href="./portfolio.html"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRounded />}
            >
              Explore my projects
            </Button>
          </Stack>
          <Stack className="hero-location" direction="row" spacing={1} alignItems="center">
            <LocationOnOutlined fontSize="small" color="primary" />
            <Typography variant="body2" color="text.secondary">
              Based in Texas
            </Typography>
          </Stack>
        </Box>
        <Box className="portrait-wrap">
          <Box
            component="img"
            className="hero-portrait"
            src={portraits[portraitIndex]}
            alt="LaShell Young"
          />
          <IconButton
            className="portrait-switch"
            aria-label="Show another portrait"
            onClick={changePortrait}
          >
            <ShuffleRounded />
          </IconButton>
          <Box className="portrait-caption">
            <Typography fontWeight={700}>LaShell Young</Typography>
            <Typography variant="body2" color="text.secondary">
              Developer in progress
            </Typography>
          </Box>
        </Box>
        <Box className="hero-glow" aria-hidden="true" />
      </Box>

      <Box component="section" id="about" className="content-section">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Learning by making.">
          I&apos;m currently working as a product development engineer; focusing on building software that solves real-world problems with Full-stack development.
          Full-time work experience has given me the opportunity to learn and grow as a software developer, and I am continuously growing my skills.
          This portfolio is a collection of my personal projects and experiments in software development, showcasing my curiosity and passion for creating meaningful software.
        </SectionHeading>
        <Card className="education-card" elevation={0}>
          <Avatar className="education-icon">
            <MenuBookRounded />
          </Avatar>
          <Box>
            <Typography variant="overline" color="text.secondary">
              EDUCATION
            </Typography>
            <Typography variant="h6" component="p" fontWeight={700}>
              B.S. in Computer Science
            </Typography>
            <Typography color="text.secondary">
              Prairie View A&amp;M University
            </Typography>
          </Box>
        </Card>

        <Typography variant="h4" component="h3" className="skills-title">
          Skills I&apos;m growing
        </Typography>
        <Box className="skills-grid">
          {skillGroups.map((group) => (
            <Card className="skill-card" elevation={0} key={group.title}>
              <Stack direction="row" spacing={1.25} alignItems="center">
                <Avatar className="skill-icon">{group.icon}</Avatar>
                <Typography variant="h6" component="h4" fontWeight={700}>
                  {group.title}
                </Typography>
              </Stack>
              <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} className="skill-chips">
                {group.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" />
                ))}
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>

      <ContactSection />
    </>
  );
}
