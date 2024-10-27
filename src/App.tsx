
import "./App.css"

import { AboutMe } from "./components/AboutMe";
import { Background } from "./components/Background";
import { Opener } from "./components/Opener";
import { Project, ProjectsList } from "./components/ProjectsList";

export function App() {
    const projects = [
        new Project(
            "Projects are coming!",
            "I am currently working on a system that will automatically gather all of my projects off of GitHub together to automatically place them here!"
        )
    ]

    return (
        <>
            <div className="canvasCont">
                <Background />
            </div>
            <main>
                <Opener />
                <AboutMe />
                <ProjectsList projects={projects} />
            </main>
        </>
    )


}