import "../../App.css";
import cardIcon1 from "../../assets/card-icon-1.png";
import cardIcon2 from "../../assets/card-icon2.png";
import cardIcon3 from "../../assets/card-icon3.png";
import cardIcon4 from "../../assets/card-icon4.png";
const Achieve = () => {
  const data = [
    {
      img: cardIcon1,
      title: "Main Examination",
      details:
        "Geography is one of the most popular options. It owes this to its multidisciplinary characteristics.",
    },
    {
      img: cardIcon2,
      title: "Test Series",
      details:
        "Geography Test series to provide answer framing and time management skills.",
    },
    {
      img: cardIcon3,
      title: "Postal Programme",
      details:
        "The institute in its commitment of extending support to the aspirants has initiated correspondence guidelines.",
    },
    {
      img: cardIcon4,
      title: "GS (Modules)",
      details:
        "General Studies Geography is divided into 3 parts including pre-cum-main",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-center fs-1 my-5 Our-Programmes-title">
          Achieve Excellence with <br /> Our Programmes
        </h1>

        <div className="parent-container ">
          {data.map((item) => (
            <div key={item.id} className="card-wrapper ">
              <div className="card-container-box">
                <img
                  className="card-icon-img"
                  src={item.img}
                  alt={item.title}
                />
                <div>
                  <h1 className="title">{item.title}</h1>
                  <p className="card-paragraph">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-5">
          <button type="button" className="download-btn text-light">
            View our courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
