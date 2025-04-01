import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";


type defineToggle = {
    toggleFunction: () => void;
}
export default function Header({toggleFunction} : defineToggle) {
   

  return (
    <header className="Header">
      <a href="#home" className="logo">
        RC
      </a>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
            <a href="#customer">Customer</a>
            <a href="#service">Services</a>
            <a href="#project">Project</a>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="Language">
        <button type="button">ქართული</button>
        <button type="button">English</button>
      </div>
      <div className="burger">
        <MenuIcon onClick={toggleFunction} sx={{cursor:"pointer"}}/>
      </div>
    </header>
  );
}
