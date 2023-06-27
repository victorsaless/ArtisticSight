import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { AccountCircle, Chat, Settings } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200px",
        height: "100%",
        backgroundColor: "#212121",
        padding: "100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Chat sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Comunicação" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Configuração" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
