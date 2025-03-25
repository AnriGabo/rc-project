
import "./Header.css";

export default function Header() {
  return (
            <header className="Header">
             <a href="#" className="logo">RC</a>
                <nav>
                    <ul>
                        <li>
                            <a href="home">Home</a>
                            <a href="about">About</a>
                            <a href="services">Services</a>
                            <a href="contact">Contact</a>
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
