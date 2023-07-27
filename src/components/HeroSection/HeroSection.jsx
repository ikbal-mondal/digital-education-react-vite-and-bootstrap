import banner from "../../assets/Banner-image1.png";
const HeroSection = () => {
  return (
    <div
      className="bg-img"
      style={{
        height: "100%",
        backgroundColor: "#39B0E4",
      }}
    >
      <div className="row container mx-auto py-5">
        <div className="col-lg-6 col-md-6 col-sm-12 left text-light d-flex align-items-center">
          <div className="">
            <h1 style={{ fontFamily: "Montserrat", fontSize: 52,fontWeight:'700' }}>
              Best IAS Coching For Geography
            </h1>
            <p className="" style={{ textShadow: "-3px -4px 3px black" }}>
              Success is simple. Do what’s right, the right way, at the right
              time and with right DIRECTION IAS ! Top Rank 2021 UPSC Result
              4th,Rank , 12th, Rank , 30th, Rank
            </p>
            <button
              type="button"
              className="btn btn-light text-primary py-3 px-3 rounded-5"
            >
              Classroom Admission
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 right mt-5">
          <div>
            <div id="carouselIndicators" className="carousel slide ">
              <div className="carousel-indicators ">
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className="active-bg"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={banner} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={banner} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
