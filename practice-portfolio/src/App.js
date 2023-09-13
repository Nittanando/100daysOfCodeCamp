import "./App.css";
import ContactHome from "./components/ContactHome";
import Navbar from "./components/Navbar";
import RecentItems from "./components/RecentProjects";
import ServicesHome from "./components/ServicesHome";
import Skill from "./components/Skill";
import "./styles/components.css";
import "./styles/mediaQuery.css";

function App() {
  return (
    <div className="site-container-wrapper bg-light vh-100 p-4">
      <div className="site-container w-100 p-5 bg-white border shadow-sm">
        <div className="row text-dark fw-bold">
          <div className="col-md-12 col-sm-12 col-lg-4 left">
            <Navbar />
            <div className="about-me mt-5 p-2">
              <h2 className="fw-bold name-font-size">Nittanando Sarkar</h2>
              <h4 className="fw-bold title-font-size ">Frontend Engineer</h4>
              <div className="about-me-paragraph mt-4">
                <p className="paragraph-font-size">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                  atque impedit harum rerum possimus voluptatibus cupiditate.
                  Officiis culpa, eius inventore est quos quibusdam sint
                  corrupti voluptate. Asperiores similique illo adipisci,
                  expedita quaerat, voluptatem ratione error maxime quasi magni,
                  fugit enim! Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Veniam, quasi.
                </p>
                <div>
                  <button className="btn rounded-0 border px-2 py-1 button paragraph-font-size">
                    About
                  </button>
                  <button className="btn rounded-0 border px-2 py-1 ms-2 button paragraph-font-size">
                    Resume
                  </button>
                </div>
                <hr className="my-4" />
                <Skill />
                <ContactHome />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-8 right">
            <div className="ps-3">
              <div className="mb-4">
                <ServicesHome />
              </div>
              <div className="mb-4">
                <RecentItems recentTitle="Projects" />
              </div>
              <div>
                <RecentItems recentTitle="Blogs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
