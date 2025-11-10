
import "./App.css"

import { AboutMe } from "./components/AboutMe";
import { Background } from "./components/Background";
import { Opener } from "./components/Opener";
import { Project, ProjectsList } from "./components/ProjectsList";

export function App() {
    const projects = [
        new Project(
            "Repifi",
            "An upcoming fitness app business that I have co-founded, where we want to bring a more social element to workout loggers and find ways to replace social media!",
            "/repifi.png",
            "https://repifi.app"
        ),
        new Project(
            "MeVitae website rebrand",
            "Working alongside my colleagues, we created a fresh and modern refresh to the MeVitae website!",
            "/mevitae-thumb.png",
            "https://mevitae.com"
        ),
        new Project(
            "Hiring Automation",
            "My first proper dedicated professional project, a tool to allow for faster, fairer hiring - with integrations with MeVitae's existing products while using the power of informated AI decisions!",
            "/hiring-automation.webp",
            "https://mevitae.com/hiring-automation"
        ),
        new Project(
            "PowerPoint Karaoke",
            "A fork from @huijing (GitHub)'s project with a nicer UI, brought to React (with more slides). A fun improv game that is always a great time for friends or colleagues!",
            "/pptx.png",
            "https://ppt-karaoke.zakariya.tech/"
        ),
        new Project(
            "HTML5 Offline Maps Application",
            "My Final Year Project at Royal Holloway - this was a Vite+React+TypeScript project using OpenStreetMaps to generate a cool platform-agnostic map app!"
        ),
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