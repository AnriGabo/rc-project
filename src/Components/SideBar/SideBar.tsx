import "./SideBar.css";

type DefineToggele = {
  isOpened: boolean;
  onClose: () => void ;
};

export default function SideBar({ isOpened,onClose }: DefineToggele) {
  return (
    <aside  className={isOpened ? "aside show" : "aside hide"}>
      <div className="SideBar-Component">
      <a href="#home" className="logo2">
        RC
      </a>
        <nav>
          <ul>
            <li onClick={onClose}>
              <a href="#about" > About</a>
              <a href="#customer">Customer</a>
              <a href="#service">Services</a>
              <a href="#project">Project</a>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="LanguageSwitcher">
          <button type="button" className="Geo">
            ქართული
          </button>
          <button type="button" className="Eng">
            English
          </button>
        </div>
      </div>
    </aside>
  );
}
