import { NorthEastRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export default function ProjectCard({ project }) {
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
          <Chip label={project.category} size="small" variant="outlined" />
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
