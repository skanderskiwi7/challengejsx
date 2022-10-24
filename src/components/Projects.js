import React from "react";

const Projects = () => {
  return (
    <div>
      {" "}
      <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          {/* <!--Project Card --> */}
          <div class="project-card">
            <img src="./proj1.jpg" alt="project" />
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </div>
          {/* <!--Project Card --> */}
          <div className="project-card">
            <img src="./proj2.jpg" alt="project" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </div>
          {/* <!--Project Card --> */}
          <div className="project-card">
            <img src="./proj3.jpg" alt="project" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </div>
          {/* <!--Project Card --> */}
          <div className="project-card">
            <img src="./proj4.jpg" alt="project" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
