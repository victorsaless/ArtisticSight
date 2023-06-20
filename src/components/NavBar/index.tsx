import { Link } from "react-router-dom";
import Copyright from "../../components/footer/footer";

import "./NavBarStyle.css";

function NavBar() {
  return (
    <div className="LinkCss">
      <ul>
        <p>
          <Link style={{ color: "white" }} to="/ArtisticSight">
            Esqueci minha senha!
          </Link>
        </p>
        <i style={{ color: "#000000c1" }}>{"."}</i>
        <p>
          <Link style={{ color: "white" }} to="/register">
            Não possui uma conta? Cadastrar-se!
          </Link>
        </p>
      </ul>
      <br />
      <Copyright />
    </div>
  );
}
export default NavBar;
