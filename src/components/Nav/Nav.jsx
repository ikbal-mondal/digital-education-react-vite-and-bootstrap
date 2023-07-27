import logo from "../../assets/logo.png";
// import { AiTwotoneLock } from "react-icons/ai";
import download from "../../assets/Download-Icon.png";
import student from "../../assets/Student.png";
import horizentalLine from "../../assets/horizental-line.png";
import locback from "../../assets/Group-loc.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: 170, height: 65 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admission
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Course
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Store
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item fs-3 d-flex align-items-center lock">
              <img
                style={{ width: "18px", height: "22px" }}
                src={locback}
                alt=""
              />

              <span className="icon-nbr">1</span>
            </li>
            <li className="mx-3 d-none d-lg-block">
              <img src={horizentalLine} alt="" />
            </li>
            <li className="nav-item ">
              <button type="button" className="download-btn text-light">
                <img src={download} alt="" className="Download-Icon" />
                Download
              </button>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button type="button" className="outline-btn">
                <img src={student} alt="" className="Download-Icon" />
                Students Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
