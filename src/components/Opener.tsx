import css from "../styles/Opener.module.css"
import { H1, MassiveText } from "./ui/Text";
import { ChevronDown, ChevronRight } from "akar-icons";
import { Colors } from "./ui/Colors";
import { useEffect, useState } from "react";


export function Opener() {
    const title = "Welcome to Zakariya's Portfolio!"
    const [renderedTitle, setRenderedTitle] = useState<string>("")

    const scrollToNextSection = () => document.getElementById("AboutMe")?.scrollIntoView({ behavior: "smooth" })

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            if (idx < title.length) {
                setRenderedTitle(title.slice(0, idx + 1))
                idx++;
            } else clearInterval(interval)
        }, 75/*ms*/);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={css.opener}>
            <MassiveText className={css.title}><ChevronRight size={80} strokeWidth={3} />{renderedTitle}</MassiveText>

            <H1>Scroll down to find Zakariya's projects and find out more about him!</H1>

            <ChevronDown onClick={scrollToNextSection} className={css.downArrow} strokeWidth={5} size={32} color={Colors.White} />

        </div>
    )
}