import {Link} from "react-router-dom";

//Styles
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <Link to='/' className="header__logo">
        <img src="logo.png" alt="logo" />
        <p>Users<br/>management</p>
      </Link>
    </header>
  )
}