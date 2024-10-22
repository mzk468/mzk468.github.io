import { LinkedinFill } from "akar-icons"
import { SocialButton } from "./ui/Buttons";
import { Colors } from "./ui/Colors";

export function Opener() {
    return (
        <div>
            <SocialButton
                icon={<LinkedinFill strokeWidth={1} size={24} color={"black"} />}
                url="https://www.linkedin.com/in/mzk468/"
                color={Colors.Red}
            />
            <SocialButton
                icon="linkedin.svg"
                url="https://www.linkedin.com/in/mzk468/"
                color={Colors.Red}
            />
        </div>
    )
}