import "./Customer.css";

import microsoft from "../../Images/microsoft.png";
import tesla from "../../Images/Tesla.png";
import twitter from "../../Images/twitter.png";
import spotify from "../../Images/Spoti.png";
import WhiteNike from "../../Images/white-nike.png";
import Macdonalds from "../../Images/MC.png";

export default function Team() {
  return (
    <section className="Team-Section" id="customer">
      <h2 className="Team-Title">ჩვენი მომხმარებლები</h2>

      <div className="Team-Container">
        <div className="Team-Member">
          <img
            src={microsoft}
            alt="Official Microsoft logo"
            className="Member"
            onClick={() => window.open("https://about.google/", "_blank")}
          />
        </div>

        <div className="Team-Member">
          <img
            src={twitter}
            alt="Official Twitter logo"
            className="Member"
            onClick={() => window.open("https://x.com/home", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={tesla}
            alt="Official Tesla logo"
            className="Member"
            onClick={() => window.open("https://www.tesla.com/", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={spotify}
            alt="Official Spotify logo"
            className="Member"
            onClick={() =>
              window.open(
                "https://www.spotify.com/ge/premium/?ref=account_join_premium_button#plans",
                "_blank"
              )
            }
          />
        </div>
        <div className="Team-Member">
          <img
            src={WhiteNike}
            alt="Official Nike logo"
            className="Member"
            onClick={() => window.open("https://www.nike.com/", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={Macdonalds}
            alt="Official Macdonalds logo"
            className="Member"
            onClick={() =>
              window.open("https://mcdonalds.ge/ge/home", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
}
