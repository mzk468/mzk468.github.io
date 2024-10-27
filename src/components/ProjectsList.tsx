import css from "../styles/ProjectsList.module.css"
import { BigText } from "./ui/Text"

export function ProjectsList() {
    return (
        <div id="Projects" className={css.projectsList}>
            <BigText className={css.title}>My Projects</BigText>
        </div>
    )
}