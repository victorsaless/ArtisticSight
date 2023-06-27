import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Grid,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Sidebar from "../../components/sidebar";

const theme = createTheme({
  palette: {
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
});

const sidebarVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const mouseX = e.clientX;
      setShowSidebar(mouseX <= 200);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderContent = (delay: any) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        style={{ marginLeft: "200px" }}
      >
        <Typography variant="h6" component="div" color="white">
          Conteúdo
        </Typography>
        <p>Este é um exemplo de conteúdo.</p>
      </motion.div>
    );
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSidebarOpen = showSidebar && windowWidth <= 600;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nome do Site
          </Typography>
          <div style={{ position: "relative" }}>
            <IconButton size="large" edge="end" color="inherit">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Pesquisar..."
              inputProps={{ "aria-label": "pesquisar" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <motion.div
        initial="hidden"
        animate={showSidebar ? "visible" : "hidden"}
        variants={sidebarVariants}
      >
        <Sidebar />
      </motion.div>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={isSidebarOpen ? 12 : 4}>
          {renderContent(0.2)}
        </Grid>
        {isSidebarOpen && (
          <Grid item xs={8}>
            {/* Preencha o espaço quando o sidebar estiver aberto */}
          </Grid>
        )}
        {!isSidebarOpen && (
          <>
            <Grid item xs={4}>
              {renderContent(0.4)}
            </Grid>
            <Grid item xs={4}>
              {renderContent(0.6)}
            </Grid>
          </>
        )}
      </Grid>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Box
          sx={{
            p: 3,
            mt: 4,
            backgroundColor: "#212121",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" color="white">
            Conteúdo Adicional
          </Typography>
          <p>Este é outro exemplo de conteúdo adicional.</p>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default Dashboard;
