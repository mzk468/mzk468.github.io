import { ReactNode } from "react";
import css from "../styles/ProjectsList.module.css"
import { BigText, H2, P } from "./ui/Text"
import { ChevronHorizontal } from "akar-icons";

export class Project {
    title: string;
    desc: string;
    thumbSrc?: string;
    repo?: string;
    article?: ReactNode;

    constructor(title: string, desc: string, thumbSrc?: string, repo?: string, article?: ReactNode) {
        this.title = title;
        this.desc = desc;
        this.thumbSrc = thumbSrc;
        this.repo = repo;
        this.article = article;
    }

    toCard(idx: number) {
        return <ProjectCard project={this} idx={idx} />
    }
}

export function ProjectsList({ projects }: { projects: Project[] }) {
    const selectedProj = parseInt(new URLSearchParams().get("project") + "")

    const projectCards: ReactNode[] = [];
    projects.forEach((project, idx) => {
        projectCards.push(project.toCard(idx))
    })

    return (
        <>
            {!Number.isNaN(selectedProj) && <ProjectPopUp project={projects[selectedProj]} />}
            <div id="Projects" className={css.projectsList}>
                <BigText className={css.title}>My Projects</BigText>
                <div className={css.grid}>
                    {projectCards}
                </div>
            </div>
        </>
    )
}

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
    return (

        <div className={css.projectCard + " " + idx /* FIX THIS */}>
            {project.thumbSrc ?
                <img src={project.thumbSrc} alt={`${project.title} Thumbnail`} />
                :
                <div className={css.noThumb}>
                    <ChevronHorizontal size={100} color={"#2f005f"} />
                </div>
            }

            <H2>{project.title}</H2>
            <P>{project.desc}</P>
        </div>
    )
}

function ProjectPopUp({ project }: { project?: Project }) {
    if (!project) return;

    return (
        <div className={css.projectPopUp}>
            <BigText>{project.title}</BigText>
        </div>
    )

}