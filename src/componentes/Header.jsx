import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <container>
            <nav>
                <img className="encabezado" src='../src/componentes/imagenes/logo.svg'></img>
                <ul>
                    <li>
                        <Link to={`/`} > Principal
                        </Link>
                    </li>
                </ul>
               
            </nav>   
        </container>
    );

}
export default Header;
