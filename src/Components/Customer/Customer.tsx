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
            alt="Man looking straight at the camera"
            className="Member"
            onClick={() => window.open("https://about.google/", "_blank")}
          />
        </div>

        <div className="Team-Member">
          <img
            src={twitter}
            alt="Man looking straight at the camera"
            className="Member"
            onClick={() => window.open("https://x.com/home", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={tesla}
            alt="Man looking straight at the camera"
            className="Member"
            onClick={() => window.open("https://www.tesla.com/", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={spotify}
            alt="Man looking straight at the camera"
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
            alt="Man looking straight at the camera"
            className="Member"
            onClick={() => window.open("https://www.nike.com/", "_blank")}
          />
        </div>
        <div className="Team-Member">
          <img
            src={Macdonalds}
            alt="Man looking straight at the camera"
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
