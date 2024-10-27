
import "./App.css"

import { AboutMe } from "./components/AboutMe";
import { Opener } from "./components/Opener";
import { Project, ProjectsList } from "./components/ProjectsList";

/* TO REMOVE!!!!!!!!! */
import { TestNode } from "./Test";


export function App() {

    if (TestNode) return TestNode;

    const projects = [new Project("Projects are coming!", "I am currently working on a system that will automatically gather all of my projects off of GitHub together to automatically place them here!")]


    return (
        <>
            <Opener />
            <AboutMe />
            <ProjectsList projects={projects} />
        </>
    )


}