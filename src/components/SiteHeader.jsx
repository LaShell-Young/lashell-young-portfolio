import {
  AppBar,
  Avatar,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export default function SiteHeader({ page }) {
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
