import "./App.css";

function App() {
  return (
    <div className="container-fluid g-0">
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex align-items-center justify-content-between w-100 ps-lg-4 pe-lg-4 ps-md-3 pe-md-3 ps-sm-2 pe-sm-2 pe-1 ps-1">
          <span className="navbar-brand fs-1">
            Logo<strong className="text-danger"> .</strong>
          </span>

          <span>
            <button
              className="p-0 bg-transparent border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-menu-button-wide-fill text-light fs-3"></i>
            </button>

            <div
              className="offcanvas bg-dark text-light offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button
                  type="button"
                  className="btn-close text-reset bg-light"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="w-100">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
