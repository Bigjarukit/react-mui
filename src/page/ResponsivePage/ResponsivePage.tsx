import { Box, Stack } from "@mui/material";

export default function ResponsivePage() {
  return (
    <Stack direction={{xs:"column",md:"row"}} >
      <Box sx={{ display: "flex",width: "100%", bgcolor: "GrayText",p: "10px"}} >XXX</Box>
      <Box sx={{ display: "flex",width: "100%", bgcolor: "red",p: "10px"}} >YYY</Box>
    </Stack>
  );
}
