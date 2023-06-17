import { Link } from "react-router-dom";
import "./NavBarStyle.css";

function NavBar() {
  return (
    <div className="LinkCss">
      <ul>
        <p>
          <Link style={{ color: "white" }} to="ArtisticSight/">
            Esqueci minha senha!
          </Link>
        </p>
        <p>
          <Link style={{ color: "white" }} to="/Cadastro">
            Não possui uma conta? Cadastrar-se!
          </Link>
        </p>
      </ul>
    </div>
  );
}
export default NavBar;
