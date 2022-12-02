import "./App.css";
import logo from "./asset/image/svg/logo.svg";

function App() {
  return (
    <div
      className="container-fluid p-2 bg-light g-0"
      style={{ minHeight: "100vh" }}
    >
      <nav className="navbar navbar-dark bg-transparent fixed-top mt-2">
        <div className="d-flex align-items-center justify-content-between w-100 ps-3 pe-3">
          <span className="p-2 shadow-sm" style={{ border: "3px solid azure" }}>
            <img
              style={{ height: "3.5rem", backgroundColor: "darkcyan" }}
              className="p-1 home-logo"
              src={logo}
              alt="Roy & Associate"
            />
          </span>

          <span className="d-flex align-items-center">
            <a className="text-light text-decoration-none me-4 mb-1" href="#">
              Sign in
            </a>

            <button
              className="me-3 p-0 bg-transparent border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-menu-button-wide-fill text-light fs-3"></i>
            </button>

            <div
              className="offcanvas bg-dark p-3 text-light offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="border h-100">
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset bg-light mt-2 ms-2"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body mt-3">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="w-75 mb-3 p-3 border">
                      <button className="btn btn-info rounded-0 w-100">
                        Home
                      </button>
                    </div>
                    <div className="w-75 mb-3 p-3 border">
                      <button className="btn btn-primary rounded-0 w-100">
                        About
                      </button>
                    </div>
                    <div className="w-75 mb-3 p-3 border">
                      <button className="btn btn-danger rounded-0 w-100">
                        Contact
                      </button>
                    </div>
                    <div className="w-75 mb-3 p-3 border">
                      <button className="btn btn-light rounded-0 w-100">
                        Projects
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </nav>

      <div>
        <div className="vh-100 position-relative home-bg-img">
          <div
            className="h-100 home-text-overlay w-50 position-absolute bg-dark d-flex align-items-center justify-content-center"
            style={{ opacity: 0.8, zIndex: 1 }}
          >
            <div className="text-light ms-1 ms-md-5 ms-lg-5 ms-sm-2 p-5 fw-bold home-line-style home-line2-style">
              <span className="home-title" style={{ fontSize: "3.5rem" }}>
                Your <strong className="text-danger">Problem,</strong> our{" "}
                <strong className="text-info">Solution.</strong>
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt sequi, voluptatibus numquam dignissimos at maiores
                rerum ab ut doloremque nesciunt!
              </p>
              <div
                className="p-3"
                style={{ width: "fit-content", border: "2px solid azure" }}
              >
                <button className="btn btn-info rounded-0 btn-info">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// <img
//             className="w-100 vh-75 vh-lg-100"
//             src={scale}
//             alt="Roy & Associates"
//             style={{ filter: "hue-rotate(90deg)" }}
//           />
