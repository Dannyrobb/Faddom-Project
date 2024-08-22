// src/styles/main.style.ts

import { SxProps, Theme } from "@mui/material";
import { fadeIn, fadeInFromTop } from "../styles/animations"; // Adjust path as needed

export const styles = {
  container: {
    display: "flex",
    minHeight: "90vh",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
  } as SxProps<Theme>,

  paper: {
    padding: "15px",
    width: "100%",
    minHeight: "140px",
    maxHeight: "450px",
    marginBottom: "50px",
    animation: `${fadeInFromTop} 0.5s ease-out`,
  } as SxProps<Theme>,

  chartContainer: {
    height: "400px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    animation: `${fadeIn} 1.4s ease-out`,
  } as SxProps<Theme>,

  welcomeContainer: {
    animation: `${fadeIn} 1.4s ease-out`,
  } as SxProps<Theme>,
};
