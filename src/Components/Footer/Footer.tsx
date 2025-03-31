import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="Footer" id="footer">
      <div className="Footer-Container">
        <div className="Footer-PersonalData">
          <p>&copy; 2025 RC. ყველა უფლება დაცულია</p>
        </div>
        <div className="Social-Contact-Email">
          <p>ელ-ფოსტა</p>
          <a
            href="mailto:info@rc.com.ge"
            id="contact-email"
            className="ContactEmail"
            target="_blank"
          >
            info@rc.com.ge
          </a>
        </div>
        <div className="Social-Contact-Links">
          <p>სოციალური ქსელები</p>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className="InstagramIcon" />
            Instagram
          </a>
          <a href="#" target="_blank">
            <FacebookIcon className="FacebookIcon" />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
