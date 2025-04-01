import "./SideBar.css";

export default function SideBar() {
  return (
    <aside className="aside">
      <a href="#home" className="logo">
        RC
      </a>
      <div className="SideBar-Component">
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
        <div className="LanguageSwitcher">
            <button type="button" className="Geo">ქართული</button>
            <button type="button" className="Eng">English</button>
        </div>
      </div>
    </aside>
  );
}
