import "./Greetings.css";

export default function Greetings() {
  return (
    <section id="home">
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

      <div className="ContactUs">
        <button type="button">დაგვიკავშირდით</button>
      </div>
    </section>
  );
}
