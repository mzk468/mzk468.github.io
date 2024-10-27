import css from "../styles/Opener.module.css"
import { H1, MassiveText } from "./ui/Text";
import { ChevronDown } from "akar-icons";
import { Colors } from "./ui/Colors";
import { useEffect, useState } from "react";


export function Opener() {
    const title = "Welcome to Zakariya's Portfolio!"
    const [renderedTitle, setRenderedTitle] = useState<string>("")

    useEffect(() => {
        let idx = 0;
        const interval = setInterval(() => {
            if (idx < title.length) {
                setRenderedTitle(title.slice(0, idx + 1))
                idx++;
            } else clearInterval(interval)
        }, 100/*ms*/);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={css.opener}>
            <MassiveText className={css.title}>{renderedTitle}</MassiveText>

            <H1>Scroll down to find Zakariya's projects and find out more about him!</H1>

            <ChevronDown className={css.downArrow} strokeWidth={5} size={32} color={Colors.White} />

        </div>
    )
}