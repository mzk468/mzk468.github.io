import { ReactNode } from "react";
import css from "../../styles/ui/Card.module.css"

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className={css.card}>
            {children}
        </div>
    )
}