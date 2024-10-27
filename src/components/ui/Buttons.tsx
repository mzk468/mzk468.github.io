import { ReactNode } from "react";
import css from "../../styles/ui/Buttons.module.css"
import { Colors } from "./Colors";

/* === --- Components --- === */
export function SocialButton({ url, icon, color }: SocialAccountProps) {
    return (
        <a
            className={css.socialButton} href={url}
            target="_blank"
            style={{ backgroundColor: color }}
        >
            {typeof (icon) === "string" ? <img src={icon} /> : icon}
        </a>
    )
}

export function LinkButton({ text, url, color }: LinkProps) {
    return (
        <a
            className={css.linkButton} href={url} target="_blank"
            style={{ textDecoration: `${color} wavy underline` }}
        >
            {text}
        </a >
    )
}


/* === --- Interfaces --- === */
interface ButtonProps {
    url?: string;
    onClick?: () => void;
    color: Colors;
}

export interface SocialAccountProps extends ButtonProps {
    url: string;
    icon: string | ReactNode;
}

export interface LinkProps extends ButtonProps {
    url: string;
    text: string;
}