import "./Services.css";

export default function Services() {
  return (
    <div>
      <section className="Service-Section" id="service">
        <h2 className="Our-Service">ჩვენი სერვისები</h2>

        <div className="Service-Container">
          <div className="Service">
            <h3 className="BuildingSystem">ჩაშენებადი სისტემები</h3>
            <p>კომპლექსური ჩაშენებადი სისტემების შექმნა და განვითარება</p>
          </div>

          <div className="Service">
            <h3 className="BuildingSystem">მონაცემთა ბაზების არქიტექტურა</h3>
            <p>იმპლემენტაცია მაღალი წარმადობისა და უსაფრთხოებისთვის.</p>
          </div>
          <div className="Service">
            <h3 className="BuildingSystem">მობილური პლათფორმები</h3>
            <p>
              მობილური აპლიკაციების განვითარება iOS და Android პლატფორმებისთვის.
            </p>
          </div>
          <div className="Service">
            <h3 className="BuildingSystem">კომპიუტერული აპლიკაციები</h3>
            <p>
              ინოვაციური ვებ და კომპიუტერული აპლიკაციების შექმნა თანამედროვე
              ტექნოლოგიებით.
            </p>
          </div>
          <div className="Service">
            <h3 className="BuildingSystem">სისტემური ინტეგრაციები</h3>
            <p>კომპლექსური ბიზნეს პროცესების ავტომატიზაციისთვის.</p>
          </div>
          <div className="Service">
            <h3 className="BuildingSystem">AI და ავტომატიზაციის ინტეგრაცია</h3>
            <p>ხელოვნური ინტელექტისა და ავტომატიზაციის დანერგვა პროცესებში</p>
          </div>
        </div>
      </section>
    </div>
  );
}
