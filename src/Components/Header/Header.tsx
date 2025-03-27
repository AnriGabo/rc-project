
import "./Header.css";

export default function Header() {
  return (
            <header className="Header">
             <a href="#home" className="logo">RC</a>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                            <a href="#customer">Customer</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="Language">
                    <button type="button">ქართული</button>
                    <button type="button">English</button>
                </div>
            </header>
  )
}
