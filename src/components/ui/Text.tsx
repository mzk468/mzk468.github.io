import { ReactNode } from "react"
import css from "../../styles/ui/Text.module.css"


export interface TextProps { children: ReactNode, className?: string }

export function MassiveText({ children, className }: TextProps) {
    return <h1 className={`${className} ${css.massiveText}`}>{children}</h1>
}

export function BigText({ children, className }: TextProps) {
    return <h1 className={`${className} ${css.bigText}`}>{children}</h1>
}

export function H1({ children, className }: TextProps) {
    return <h1 className={`${className} ${css.h1}`}>{children}</h1>
}

export function H2({ children, className }: TextProps) {
    return <h2 className={`${className} ${css.h2}`}>{children}</h2>
}

export function H3({ children, className }: TextProps) {
    return <h3 className={`${className} ${css.h3}`}>{children}</h3>
}

export function P({ children, className }: TextProps) {
    return <p className={`${className} ${css.p}`}>{children}</p>
}