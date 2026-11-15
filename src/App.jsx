import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import HomePage from "./components/HomePage.jsx";
import PortfolioPage from "./components/PortfolioPage.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import theme from "./theme.js";

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
