import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    id: 1,
    label: "Html",
    url: "https://en.wikipedia.org/wiki/HTML",
  },
  {
    id: 2,
    label: "Css",
    url: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    id: 3,
    label: "Scss",
    url: "https://sass-lang.com/",
  },
  {
    id: 4,
    label: "Bootstrap",
    url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
    id: 5,
    label: "Tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    id: 6,
    label: "Javascript",
    url: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    id: 7,
    label: "Jquery",
    url: "https://jquery.com/",
  },
  {
    id: 8,
    label: "React",
    url: "https://react.dev/",
  },
  {
    id: 9,
    label: "Python",
    url: "https://www.python.org/",
  },
  {
    id: 10,
    label: "Rest API",
    url: "https://en.wikipedia.org/wiki/Representational_state_transfer",
  },
  {
    id: 11,
    label: "Axios",
    url: "https://axios-http.com/docs/intro",
  },
  {
    id: 12,
    label: "App Testing",
    url: "https://en.wikipedia.org/wiki/Software_testing",
  },
  {
    id: 13,
    label: "SEO",
    url: "https://en.wikipedia.org/wiki/Search_engine_optimization",
  },
  {
    id: 14,
    label: "Digital Marketing",
    url: "https://en.wikipedia.org/wiki/Digital_marketing",
  },
  {
    id: 15,
    label: "Git",
    url: "https://github.com/",
  },
  {
    id: 16,
    label: "Jira",
    url: "https://www.atlassian.com/software/jira",
  },
];

const Skill = () => {
  return (
    <div>
      <h5 className="fw-bold title-font-size">Frequently working with</h5>
      <div className="mt-3 d-flex flex-wrap gap-2">
        {skills.map((data) => {
          return (
            <Link
              key={data.id}
              to={data.url}
              target="_blank"
              className="skill-item text-dark px-2 py-1 paragraph-font-size"
            >
              {data.label}
            </Link>
          );
        })}

        {/* <Link className="skill-item text-dark px-2 py-1">Html</Link> */}
      </div>
    </div>
  );
};

export default Skill;
