import { useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar";
import video from "../../assets/foto.mp4";
import Global from "./style";
import firebaseConfig from "../../config/config";

function SignIn() {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const db = getFirestore(firebaseConfig);
  const useCollectionRef = collection(db, "users");

  const getUser = async (email: string, password: string) => {
    const querys = query(
      useCollectionRef,
      where("email", "==", email),
      where("password", "==", password)
    );

    const data = await getDocs(querys);
    if (data.empty) {
      console.log("Usuário não encontrado", "1111111");
      return null;
    } else {
      const user = data.docs[0].data();
      console.log("Usuário encontrado:", "222222");
      return user;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setFormErrors({
        email: email ? "" : "Campo obrigatório",
        password: password ? "" : "Campo obrigatório",
      });
      return;
    }

    const emailRegex = /^[\w-/.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      console.log("Por favor, insira um email válido", "333333");
      return;
    }

    const user = await getUser(email, password);

    if (user) {
      console.log("Login bem-sucedido!", "444444");
    } else {
      console.log("Login inválido!", "5555");
    }
  };

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
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
              error={!!formErrors.email}
              helperText={formErrors.email}
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
              error={!!formErrors.password}
              helperText={formErrors.password}
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
        <NavBar />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
