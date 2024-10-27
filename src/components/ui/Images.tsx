import { ReactNode } from "react";
import css from "../../styles/ui/Images.module.css"

/**
 * A component that gives a circular image, perfect for profile pictures!
 * 
 * @param src       String referring to source of the Profile Image. **MUST BE SQUARE TO LOOK RIGHT!** 
 * @param alt       String describing contents of image for better accessibility, ensure this is as
 *                  descriptive as possible!
 * @param className Optional prop to allow for custom CSS styling.
 * @returns         ReactNode 
 */
export function ProfileImage({ src, alt, className }:
    { src: string; alt: string; className?: string }): ReactNode {
    return (
        <img className={`${className} ${css.profileImage}`} src={src} alt={alt} />
    )
}