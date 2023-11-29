import styles from "../styles/Projects.module.css";
import Project from "./Project";
import Button from "./Button";
import { useState, useEffect } from "react";
import useOnScreen from "../utils/useOnScreen";
import { useNavigate } from "react-router-dom";

export default function Projects({ projects, catList }) {
  // Custom hook to determine if the component is in the viewport
  const [ref, visible] = useOnScreen({ rootMargin: "100px" });

  // State to track the active category and navigate to all projects
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  // State to store the number of data items for each category
  const [dataCount, setDataCount] = useState();
  const allProjectCount = projects?.length;

  // State to store the projects to be displayed
  const [projectItems, setProjectItems] = useState();

  // When the projects are loaded, we add the projects to setProjectItems
  useEffect(() => {
    setProjectItems(projects);
  }, [projects]);

  // This function works when you click on the categories in the Portfolio section. We filter portfolio items by category
  const filterItems = (category) => {
    if (category == "All") return setProjectItems(projects);

    const newProjectItems = projects?.filter(
      (item) => item.category[0].title === category
    );

    setProjectItems(newProjectItems);
  };

  // Calculate the number of data items for each category
  useEffect(() => {
    // Group data by categories
    const groupedByCategory = projects?.reduce((acc, project) => {
      if (!acc[project.category[0].title]) {
        acc[project.category[0].title] = [];
      }
      acc[project.category[0].title].push(project);
      return acc;
    }, {});

    // Calculate the number of data for each category
    setDataCount(
      groupedByCategory !== undefined &&
        Object.keys(groupedByCategory).map((category) => {
          return {
            category: category,
            dataCount: groupedByCategory[category].length,
          };
        })
    );
  }, [projects]);

  return (
    <div className={`${styles.projects} ${visible && "fadeBottom"}`} style={{ "--delay": 5 }} ref={ref} id="projects">
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Projects</h2>
          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigate("/projects");
            }}
          >
            <Button>All Projects</Button>
          </a>
        </div>

        {/* Filter options for project categories */}
        <div>
          <ul>
            <li>Filter by:</li>
            {catList?.map((cat, i) => (
              <li key={i}>
                <button
                  className={`${active === i ? styles.active : ""}`}
                  type="button"
                  aria-label="Project Category"
                  onClick={() => {
                    setActive(i);
                    filterItems(cat);
                  }}
                >
                  <span className={styles.catName}>{cat}</span>
                  <span className={styles.catCount}>
                    {/* print all categories name and their count */}
                    {cat === "All"
                      ? allProjectCount
                      : dataCount &&
                        dataCount?.map(
                          (item) => item.category === cat && item.dataCount
                        )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.showcase}>
          {projectItems?.map((project, i) => (
            <Project key={i} project={project} reverse={!(i % 2)} />
          ))}
        </div>
      </div>
    </div>
  );
}