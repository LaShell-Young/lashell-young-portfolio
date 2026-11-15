import { Box, Container, Divider, Typography } from "@mui/material";

export default function SiteFooter() {
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
