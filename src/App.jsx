import { useEffect } from "react";
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
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return undefined;

    const target = document.getElementById(decodeURIComponent(hash));
    if (!target) return undefined;

    const frame = window.requestAnimationFrame(() => target.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, [page]);

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
