import React, { useState, useEffect } from "react";
import endpoints from "../constants/endpoints";
import FallbackSpinner from "./FallbackSpinner";
import Typewriter from "typewriter-effect";
import { Reveal, Fade } from "react-awesome-reveal";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.home, { method: "GET" });
        const res = await response.json();
        setData(res);
      } catch (err) {
        console.error("Home fetch Error", err);
      }
    };
    fetchData();
  }, []);

  return data ? (
    <div id="/" className="home">
      <Reveal duration={3000} triggerOnce>
        <div className="homeimage">
          <div className="avatar-ring">
            <img
              src={process.env.PUBLIC_URL + data.profilePic.source}
              alt="ProfilePic"
              className="profilePic"
            />
          </div>
          <div className="avatar-glow" />
        </div>
      </Reveal>
      <Fade direction="right" duration={3000} cascade damping={1e3} triggerOnce>
        <div className="hometext">
          <h1 className="name">{data.name}</h1>
          <div className="textanimation">
            <h2 className="im">I'm&nbsp;</h2>
            <Typewriter
              options={{
                strings: data.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="home-paragraph">
            <p>{data.paragraph}</p>
          </div>
          <div className="home-cta">
            <a
              href="#/contact"
              className="cta-btn cta-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("/contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ✉️ Hire Me
            </a>
            <a
              href="#/projects"
              className="cta-btn cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("/projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              🚀 View Work
            </a>
          </div>
        </div>
      </Fade>
    </div>
  ) : (
    <FallbackSpinner />
  );
};

export default Home;
