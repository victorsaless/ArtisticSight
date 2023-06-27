import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Global from "./style";
import firebaseConfig from "../../config/config";
import NavBar from "../../components/NavBar";
import video from "../../assets/foto.mp4";
import Avatar from "@mui/material/Avatar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !firstName || !lastName || !password) {
      setFormErrors({
        email: email ? "" : "Campo obrigatório",
        firstName: firstName ? "" : "Campo obrigatório",
        lastName: lastName ? "" : "Campo obrigatório",
        password: password ? "" : "Campo obrigatório",
      });
      return;
    }

    // Validar formato de email usando regex
    const emailRegex = /^[\w-/.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!emailRegex.test(email)) {
      setFormErrors({
        ...formErrors,
        email: "Email inválido",
      });
      return;
    }

    // Verificar se o usuário já existe no banco de dados
    const db = getFirestore(firebaseConfig);
    const usersCollectionRef = collection(db, "users");
    const querySnapshot = await getDocs(
      query(usersCollectionRef, where("email", "==", email))
    );

    if (!querySnapshot.empty) {
      setFormErrors({
        ...formErrors,
        email: "Email já cadastrado",
      });
      return;
    }

    // Enviar dados para o Firebase ou qualquer outra ação necessária
    const User = await addDoc(usersCollectionRef, {
      email,
      lastName,
      firstName,
      password,
    });

    navigate("/ArtisticSight");
    return User;
  };

  return (
    <ThemeProvider theme={Global}>
      <Container
        style={{ background: "#000000c1", borderRadius: "25px" }}
        component="main"
        maxWidth="xs"
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            ArtisticSight
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Primeiro Nome"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Segundo Nome"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Endereço de E-mail"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <NavBar />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
