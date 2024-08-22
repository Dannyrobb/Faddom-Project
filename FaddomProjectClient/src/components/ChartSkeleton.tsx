import { Box, Skeleton } from "@mui/material";

const boxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  flexDirection: "row",
  height: "400px",
  padding: "20px",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
  margin: "10px",
};

const skeletonStyles = {
  marginX: "10px",
  backgroundColor: "#cfcfcf",
};

const heights = [120, 180, 90, 150, 200, 140, 230, 110];

function ChartSkeleton() {
  return (
    <Box sx={boxStyles}>
      {heights.map((height, index) => (
        <Skeleton key={index} variant="rectangular" width={40} height={height} sx={skeletonStyles} />
      ))}
    </Box>
  );
}

export default ChartSkeleton;
