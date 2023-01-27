import { Link } from 'react-router-dom'
import "./Navbar.scss"


export default function Navbar() {

    return (
        <div className="navbarWrapper">
            <ul className="items">
                <li className="item"><Link to="/admin/">Estudiantes</Link></li>
                <li className="item"><Link to="/admin/stats">Estadisticas</Link></li>
            </ul>
            <div className="imageWrapper">
                <img src="/assets/LogoSemillero.png" alt="MDN" />
            </div>
        </div>
    );
}