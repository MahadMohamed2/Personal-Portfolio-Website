import React, { useEffect, useState } from "react";
import "./App.css"; // Importing the CSS styles
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import "./styles/globals.css"; // Importing the CSS styles
import SanityService from "./services/sanityService"; // Importing a custom service
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [home, setHome] = useState(); // State for home data
  const [about, setAbout] = useState(); // State for about data
  const [projects, setProjects] = useState(); // State for project data
  const [catList, setCatList] = useState(); // State for project categories list
  const [resume, setResume] = useState(); // State for resumes data
  const [contact, setContact] = useState(); // State for contact data
  const [skills, setSkills] = useState(); // State for skills data

  /* GET HOME DATA FROM SANITY SERVICE */
  const getHome = () => {
    SanityService.getData("home")
      .then((response) => {
        setHome(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET ABOUT DATA FROM SANITY SERVICE */
  const getAbout = () => {
    SanityService.getData("about")
      .then((response) => {
        setAbout(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET CONTACT DATA FROM SANITY SERVICE */
  const getContact = () => {
    SanityService.getData("contact")
      .then((response) => {
        setContact(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET PORTRFOLIO DATA FROM SANITY SERVICE */
  const getProjects = () => {
    SanityService.getDataWithCategory("project", 4)
      .then((response) => {
        setProjects(response);
        // We put the project category into an array
        const allCatList = [
          "All",
          ...new Set(response?.map((project) => project.category[0].title)),
        ];
        setCatList(allCatList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET RESUMES DATA FROM SANITY SERVICE */
  const getResume = () => {
    SanityService.getData("resume")
      .then((response) => {
        setResume(response[response.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* GET SKILLS DATA FROM SANITY SERVICE */
  const getSkills = () => {
    SanityService.getData("skill")
      .then((response) => {
        setSkills(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHome();
    getContact();
    getProjects();
    getResume();
    getAbout();
    getSkills();
  }, []);

  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                home={home}
                contact={contact}
                projects={projects}
                catList={catList}
                resume={resume}
                about={about}
                skills={skills}
              />
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* default redirect to home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
