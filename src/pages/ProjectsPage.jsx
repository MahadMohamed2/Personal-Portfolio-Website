import styles from "../styles//Projects.module.css";
import Project from "../components/Project";
import { useState, useEffect } from "react";
import SanityService from "../services/sanityService";

export default function ProjectsPage() {
  const [active, setActive] = useState(0); // State to track the active category button

  const [projects, setProjects] = useState(); // State to store project data
  const [catList, setCatList] = useState(); // State to store the project category list

  /* GET PORTRFOLIO DATA FROM SANITY SERVICE */
  const getProjects = () => {
    SanityService.getDataWithCategory("project") // Fetches project data with categories
      .then((response) => {
        setProjects(response);
        // Create an array of unique project categories and include 'All' as an option
        const allCatList = [
          "All",
          ...new Set(response?.map((project) => project.category[0].title)),
        ];
        setCatList(allCatList); // Updates the 'catList' state with the category list
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page.
    getProjects();
  }, []);

  // State to store the number of data items for each category
  const [dataCount, setDataCount] = useState();
  const allProjectCount = projects?.length;

  // State to store the projects to be displayed
  const [projectItems, setProjectItems] = useState();

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

    // When the projects are loaded, we add the projects to setProjectItems
    setProjectItems(projects);

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
    <div className={styles.projects}>
      <div className={styles.wrapper} style={{ marginTop: "80px" }}>
        <h2>All Projects</h2>

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
