import { Box, Typography } from "@mui/material";

export default function SectionHeading({ eyebrow, title, children }) {
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
