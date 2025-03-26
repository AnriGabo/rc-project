import "./Greetings.css";

import DevTeam from "../../Images/DevTeam.png"

export default function Greetings() {
  return (
    <section id="home" className="Section">
      <header>
        <h1>
          თქვენი გამოწვევების არსში <br />
          ჩაწვდომა და გადაწყვეტა ჩვენ <br /> მოგვანდეთ
        </h1>

        <h3>
          პატარა, მაგრამ გულღია და გონებაგახსნილი და ხანდახან <br />
          ზედმეტად ცნობისმოყვარე პროგრამისტების გუნდი.
        </h3>
      </header>
      <div className="TeamImage-Container">
        <img src={DevTeam} className="TeamImage" alt="Tech Team" />
      </div>

      <div className="ContactUs">
        <button type="button">დაგვიკავშირდით</button>
      </div>
      
    </section>
  );
}
