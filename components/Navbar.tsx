import React, { useState } from "react";

import { signOut, useSession } from "next-auth/react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { data: session, status } = useSession();

  if (status === "authenticated") console.log("session", session);

  console.log(status);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div className="logoTitle">
          ChildUP
            </div>
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
          <div  onClick={() => signOut()}>
            Logout
          </div>
          <Typography variant="h6" color="inherit" component="div">
            My Name is {session?.user.name}
          </Typography>
        </Toolbar>
      </AppBar>

      <style jsx>{`
      .logoTitle{
        color: #FF85AE;
        font: normal normal normal 18px/22px Oaklash;
      }
    `}</style>
    
    </Box>
  );
};

export default Navbar;
