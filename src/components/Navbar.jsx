import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar container'>
            <ul className='nav'>
                <li className="nav-item">
                    <Link to="/">home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about'>about</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar