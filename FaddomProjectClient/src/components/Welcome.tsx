import { Box, Typography, Paper } from "@mui/material";
import welcomeMessages from "../assets/welcomeMessages.json"; // Adjust the path as needed

function Welcome() {
  const BoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 3,
  };

  return (
    <Box sx={BoxStyle}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          {welcomeMessages.welcomeTitle}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {welcomeMessages.welcomeSubtitle}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {welcomeMessages.welcomeInstructions}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          {welcomeMessages.welcomeNote}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Welcome;
