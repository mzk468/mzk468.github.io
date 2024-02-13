export interface Project {
  name: string;
  url: string;
  desc: string;
  image: string;
}

const projects: [Project] = [
  {
    name: "Bubble Tea",
    url: "https://zakariya.tech/Bubble-Tea-Random-Picker/",
    desc: "Lets you pick bubble tea from Imagine if you have no clue what to pick",
    image: "",
  },
  {
    name: "Royal Hackaway v7 Website",
    url: "https://royalhackaway.com",
    desc: "A website showcasuing and advertising the yearly event, Royal Hackaway, a student-run Hackathon from Royal Holloway's CompSoc!",
    image: "",
  },
];

export function Projects() {
  return (
    <>
      <h1 className="text-white">My Projects</h1>

      <div className=" text-white container text-center">
        <div className="row row-cols-4 align-items-start">
          {projects.map((project) => (
            <div className="col">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface Props {
  project: Project;
}
function Project({ project }: Props) {
  const { name, url, desc, image } = project;

  return (
    <div className="text-white">
      <img src={image} />
      <a href={url}>
        <h2>{name}</h2>
      </a>
      <p>{desc}</p>
    </div>
  );
}
