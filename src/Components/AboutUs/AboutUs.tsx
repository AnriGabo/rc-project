import "./AbouUs.css";

export default function AboutUs() {
  return (
    <section className="AboutUs" id="about">
      <header>
        <h2 className="WhoWeAre">ვინ ვართ ჩვენ?</h2>
        <div className="Description">
          <h3>
            პატარა, მაგრამ გულღია, გონებაგახსნილი და ხანდახან ზედმეტად
            ცნობისმოყვარე პროგრამისტების გუნდი. ჩვენთან სიტყვა <span style={{color:"#00f0ff"}}>'პრობლემა'</span> არ
            არსებობს, ის მხოლოდ მორიგი გამოწვევაა, რომელსაც <span style={{color:"#00f0ff"}}>'წარმატებით'</span>
            ვამარცხებთ. მოგვმართეთ! გაგვესაუბრეთ! დაგვირეკეთ და <span style={{color:"#00f0ff"}}>'ისიამოვნეთ'</span>.
          </h3>
        </div>
      </header>
    </section>
  );
}
