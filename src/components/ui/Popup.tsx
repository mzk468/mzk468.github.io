import { Cross } from "akar-icons"
import css from "../../styles/ui/Popup.module.css"
import { Colors } from "./Colors"
import { H1 } from "./Text"
import { ReactNode } from "react"

export function Popup({ title, className, closeButtonOnClick, children }: {
    title: string,
    className?: string,
    closeButtonOnClick: () => void,
    children: ReactNode
}) {
    return (
        <div className={`${className} ${css.popup}`}>
            <div>
                <H1>{title}</H1>
                <button onClick={closeButtonOnClick}>
                    <Cross strokeWidth={5} size={32} color={Colors.White} />
                </button>
                {children}
            </div>
        </div >
    )
}