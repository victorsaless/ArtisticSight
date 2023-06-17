import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Global from "./style";
import video from "../../assets/foto.mp4";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "../../config/config";
import Copyright from "../../components/footer/footer";

function SignIn() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [user, setDocs] = useState<
    Array<{ id: string; nome: string; email: string }>
  >([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const db = getFirestore(firebaseConfig);

  const useCollectionRef = collection(db, "users");
  
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(useCollectionRef);
      const findUser = data.docs.map((doc) => ({
        id: doc.id,
        nome: doc.data().nome,
        email: doc.data().email,
      }));
      console.log(data);
      setDocs(findUser);
    };
    getUser();
  }, []);

  return (
    <ThemeProvider theme={Global}>
      <Container
        style={{ background: "#000000c1", borderRadius: "25px" }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "customColor1.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            ArtisticSight
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          <video
            src={video}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            autoPlay
            loop
            muted
          />
        </Box>
        <Copyright style={{ color: "white" }} sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
