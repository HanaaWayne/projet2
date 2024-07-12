import { Link } from "react-router-dom"
import "./MainNav.css"

const MainNav = () => {

    return(
        <nav className="m-3">
            <Link to="/" className="ps-2 text-decoration-none text-light">Accueil</Link>
            <Link to="/a-propos"  className="ps-2 text-decoration-none text-light" >A propos</Link>
            <Link to="/dogs"  className="ps-2 text-decoration-none text-light">Dogs</Link>
            <Link to="/futurama"  className="ps-2 text-decoration-none text-light">Futurama</Link>
            <Link to="/hp"  className="ps-2 text-decoration-none text-light">Harry Potter</Link>
        </nav>
    )
}

export default MainNav