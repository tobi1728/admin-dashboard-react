import { Typography, Box } from "@mui/material";

export const Pending = () => {
  return (
    <Box
      container
      spacing={2}
      mt={5}
      px={5}
      display={"flex"}
      justifyContent={"center"}
      padding={50}
    >
      <Typography variant="h2" fontWeight={500}>
        Page is under contruction
      </Typography>
    </Box>
  );
};
