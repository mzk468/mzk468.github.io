
import "./App.css"

import { AboutMe } from "./components/AboutMe";
import { Opener } from "./components/Opener";
import { ProjectsList } from "./components/ProjectsList";

/* TO REMOVE!!!!!!!!! */
import { TestNode } from "./Test";


export function App() {

    if (TestNode) return TestNode;



    return (
        <>
            <Opener />
            <AboutMe />
            <ProjectsList />
        </>
    )


}