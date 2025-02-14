import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team4 from "../assets/team4.jpg";

// Step 1: Define a type for the team member object
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

function About() {
  // Step 2: Array of team members with their details
  const teamMembers: TeamMember[] = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: team1,
      description:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      name: "Jane Doe",
      role: "Architect",
      image: team2,
      description:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      name: "Mike Ross",
      role: "Architect",
      image: team4,
      description:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
    {
      name: "Dan Star",
      role: "Architect",
      image: team1,
      description:
        "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
    },
  ];

  return (
    <>
      <section>
        <div className="container mx-auto" id="about">
          <h2 className="text-xl">About</h2>
          <hr className="hr mb-8 mt-[2rem] md:{w-[70%] justify-center} sm:{w-[80%] items-center}" />
          <div className="text-gray-700 leading-normal">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Step 3: Map over the array to generate the team member cards */}
            {teamMembers.map((member, index) => (
              <div key={index} className="text-left">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-42 mb-2 object-cover"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
                <p className="text-gray-700 mt-2">{member.description}</p>
                <button
                  type="button"
                  className="bg-gray-300 w-full p-2 mt-4 inline-block border-solid"
                >
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
