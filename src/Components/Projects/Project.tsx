import "./Project.css";

import SmartSystem from "../../Images/SmartSystem.png";
import tracking from "../../Images/Tracking.png";

const Project = () => {
  return (
    <div className="Our-Project">
      <article>
        <header>
          <h2 className="Project-Title">
            ჩვენი წარმატებული <br></br>პროექტები
          </h2>
        </header>

        <div className="Project-Card">
          <div className="Card">
            <img
              src={SmartSystem}
              alt="Smart Inventory System Warehouse"
              className="MainImage"
            />
            <h3 className="Card-Title">Smart Inventory System</h3>
            <h4 className="Card-Description">
              საწყობებისა და მარაგების მართვის ჭკვიანი სისტემა.
              სინქრონიზირებულია ERP და მონაცემთა ანალიტიკასთან.
            </h4>
            <li className="Card-Technology">React | Node.js | PostgreSQL</li>
          </div>
          {/*  */}
          <div className="Card">
            <img
              src={tracking}
              alt="Delivery App Tracking"
              className="MainImage"
            />
            <h3 className="Card-Title">Delivery App</h3>
            <h4 className="Card-Description">
            შეკვეთების მონიტორინგის და მიტანის მართვის პლატფორმა.
            real-time ტრეკინგი და სწრაფი კურიერული სერვისი.
            </h4>
            <li className="Card-Technology">React Native, Node.js, MongoDB</li>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;

