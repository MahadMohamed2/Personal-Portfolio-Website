import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = ({
  home,
  contact,
  projects,
  catList,
  resume,
  about,
  skills,
}) => {
  return (
    <div>
      <Home home={home} />
      <About about={about} skills={skills} />
      <Resume resume={resume} />
      <Projects projects={projects} catList={catList} />
      <Contact contact={contact} />
    </div>
  );
};

export default HomePage;
