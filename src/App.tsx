import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./domain/User";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <NavBar />
        <Route path="ArtisticSight/" element={<User />} />
        <Route path="Cadastro" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
