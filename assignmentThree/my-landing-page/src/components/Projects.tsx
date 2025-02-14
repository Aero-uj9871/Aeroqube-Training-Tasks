import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";

// Step 1: Define the type for each project
type Project = {
  title: string;
  image: string;
};

function Projects() {
  // Step 2: Array of project objects
  const projects: Project[] = [
    {
      title: "Summer House",
      image: house2,
    },
    {
      title: "Brick House",
      image: house3,
    },
    {
      title: "Renovated",
      image: house4,
    },
    {
      title: "Barn House",
      image: house5,
    },
    {
      title: "Summer House",
      image: house2,
    },
    {
      title: "Brick House",
      image: house3,
    },
    {
      title: "Renovated",
      image: house4,
    },
    {
      title: "Barn House",
      image: house5,
    },
  ];

  return (
    <>
      <section className="py-12 w-full">
        <div className="container mx-auto my-auto" id="project">
          <h2 className="text-xl mb-6">Projects</h2>
          <br />
          <hr className="hr mb-8 mt-[-1.3rem] md:{w-[70%] justify-center} sm:{w-[80%] items-center}" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p4">
            {/* Step 3: Map through the projects array */}
            {projects.map((project, index) => (
              <div key={index} className="project relative">
                <img src={project.image} alt={project.title} className="w-full h-[14rem] object-cover" />
                <div className="absolute inset-0 bg-black/10 bg-opacity-50 flex items-left justify-left">
                  <span className="text-white font-bold bg-black/10 items-center h-12 w-25 px-2">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
