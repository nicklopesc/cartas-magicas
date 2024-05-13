import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


export function DefaultLayout() {
  

  return (
      <Box
        sx={{ backgroundColor: "#5B5B5F", minHeight: "100vh", minWidth:"100%", margin:"-8px" }}
      >
        <Outlet />
      </Box>
  );
}

export default DefaultLayout;
