import { useState } from "react";
import {
  ArrowForwardRounded,
  CodeRounded,
  KeyboardRounded,
  LinkedIn,
  LocationOnOutlined,
  MenuBookRounded,
  NorthEastRounded,
  ShuffleRounded,
  SmartToyRounded,
  StorageRounded,
  WorkOutlineRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import gradPortrait from "../images/lashell2021Grad.JPG";
import portraitTwo from "../images/lashell_pic2.png";
import portraitThree from "../images/lashell_pic3.png";
import fallingBallImage from "../images/FallingBallThumbnail.png";
import mazeExploreImage from "../images/MazeExploreThumbnail.png";
import theme from "./theme.js";

const portraits = [gradPortrait, portraitTwo, portraitThree];

const projects = [
  {
    name: "Falling Ball",
    description: "A simple animation of a ball falling down a course.",
    difficulty: "Beginner",
    image: fallingBallImage,
    imageAlt: "Falling Ball game project thumbnail",
    url: "https://play.unity.com/mg/other/floorislavabuild-27",
  },
  {
    name: "Maze Explore",
    description: "A game where the player controls a ball and traverses a maze.",
    difficulty: "Beginner",
    image: mazeExploreImage,
    imageAlt: "Maze Explore game project thumbnail",
    url: "https://play.unity.com/mg/other/maze-explore-1",
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: <CodeRounded />,
    skills: ["Java", "Javascript", "Python", "Typescript", "React", "Node.js", "SpringBoot"],
  },
  {
    title: "AI & Machine Learning",
    icon: <SmartToyRounded />,
    skills: ["Azure OpenAI", "LLMs", "Prompt Engineering", "LangChain"],
  },
  {
    title: "Other Technical Skills",
    icon: <KeyboardRounded />,
    skills: ["CICD", "Rest APIs", "Git", "Unit Testing", "Agile Methodology"],
  },
  {
    title: "Database Management",
    icon: <StorageRounded />,
    skills: ["SQL", "MySQL"],
  },
  {
    title: "Working together",
    icon: <WorkOutlineRounded />,
    skills: ["Communication", "Organization", "Collaboration", "Work ethic"],
  },
];

function SiteHeader({ page }) {
  return (
    <AppBar className="site-header" position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className="site-toolbar">
          <Link className="brand-link" href="./index.html" underline="none">
            <Avatar className="brand-mark">LY</Avatar>
            <Typography fontWeight={700} color="text.primary">
              LaShell Young
            </Typography>
          </Link>
          <Stack component="nav" direction="row" spacing={{ xs: 0.25, sm: 1 }} aria-label="Main navigation">
            <Button
              href="./index.html#about"
              color="inherit"
              className={page === "home" ? "nav-link active" : "nav-link"}
            >
              About
            </Button>
            <Button
              href="./portfolio.html"
              color="inherit"
              className={page === "portfolio" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Button>
            <Button href="./index.html#contactSection" color="inherit" className="nav-link">
              Contact
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <Box className="section-heading">
      <Typography className="eyebrow">{eyebrow}</Typography>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      {children && (
        <Typography color="text.secondary" className="section-description">
          {children}
        </Typography>
      )}
    </Box>
  );
}

function SiteFooter() {
  return (
    <Box component="footer" className="site-footer">
      <Container maxWidth="lg">
        <Divider />
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} LaShell Young
        </Typography>
      </Container>
    </Box>
  );
}

function ContactSection() {
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

function ProjectCard({ project }) {
  return (
    <Card className="project-card" elevation={0}>
      <CardMedia
        component="img"
        className="project-image"
        image={project.image}
        alt={project.imageAlt}
      />
      <CardContent className="project-content">
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h5" component="h3" fontWeight={700}>
            {project.name}
          </Typography>
          <Chip label={project.difficulty} size="small" variant="outlined" />
        </Stack>
        <Typography color="text.secondary" className="project-description">
          {project.description}
        </Typography>
        <Button
          component="a"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          endIcon={<NorthEastRounded />}
          className="project-link"
        >
          Play project
        </Button>
      </CardContent>
    </Card>
  );
}

function HomePage() {
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
            {/* <Button href="#about" variant="outlined" size="large">
              A little about me
            </Button> */}
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

function PortfolioPage() {
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

export default function App({ page }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteHeader page={page} />
      <Container component="main" maxWidth="lg" className="page-container">
        {page === "portfolio" ? <PortfolioPage /> : <HomePage />}
      </Container>
      <SiteFooter />
    </ThemeProvider>
  );
}
