import { ChevronDown, Cross, GithubFill, LinkedinFill } from "akar-icons"
import { SocialButton } from "./ui/Buttons";
import { Colors } from "./ui/Colors";

import css from "../styles/AboutMe.module.css"
import { ProfileImage } from "./ui/Images";
import { H1, H2, P } from "./ui/Text";
import { useState } from "react";
import { Popup } from "./ui/Popup";

export function AboutMe() {
    const [showLangsPopUp, setShowLangsPopUp] = useState(false)

    const scrollToNextSection = () => document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" })

    return (
        <>
            {showLangsPopUp && <LangsPopUp closeButtonOnClick={() => setShowLangsPopUp(false)} />}
            <div id="AboutMe" className={css.aboutMe}>
                <div className={css.contentCont}>
                    <ProfileImage src={"./me.jpeg"} alt={"Me"} /><div className={css.socialsRow} />
                    <div className={css.descSection}>
                        <H1>About Me</H1>
                        <P>A recent Computer Science and Maths BSc graduate from&nbsp;
                            <a href="https://royalholloway.ac.uk/" target="_blank">RHUL</a>,
                            Full-Stack Software Engineer @ <a href="https://mevitae.com" target="_blank">MeVitae</a>! </P>
                        <P>Avid hobbyist, plane spotter, trampolinist, and knower of&nbsp;
                            <a onClick={() => setShowLangsPopUp(true)}><i>these</i></a> programming languages!</P>
                        <P>Technology has always been at the peak of my interests, and I love writing code and learning new things!
                            I also really love Maths and Physics, and have a keen interest in Quantum, and am very interested in getting
                            into Quantum Computing!</P>

                        <P>I also love attending Hackathons, and even led the running of <a href="https://www.royalhackaway.com/" target="_blank">Royal Hackaway</a> in 2024!</P>
                        <div className={css.socialsRow}>
                            <SocialButton
                                icon={<LinkedinFill strokeWidth={1} size={32} color={Colors.OffWhite} />}
                                url="https://www.linkedin.com/in/mzk468/"
                                color={Colors.DarkBlue} />
                            <SocialButton
                                icon={<GithubFill strokeWidth={1} size={32} color={Colors.OffWhite} />}
                                url="https://www.github.com/mzk468/"
                                color={Colors.Red} />
                        </div>
                    </div>
                </div>


                <ChevronDown onClick={scrollToNextSection} className={css.downArrow} strokeWidth={5} size={32} color={Colors.White} />
            </div>
        </>
    )
}

function LangsPopUp({ closeButtonOnClick }: { closeButtonOnClick: () => void }) {
    return (
        <Popup title="My Languages and Proficiency" className={css.langsPopUp} {...{ closeButtonOnClick }}>
            <div>
                <div className={css.langsSection}>
                    <H2>Very Proficient</H2>
                    <div>
                        <Lang name="Go" img="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" url="https://go.dev/" />
                        <Lang name="JS" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                        <Lang name="TS" img="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" url="https://www.typescriptlang.org/" />
                        <Lang name="React" img="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" url="https://react.dev/" />
                        <Lang name="HTML" img="/html.png" url="https://developer.mozilla.org/en-US/docs/Web/HTML" />
                        <Lang name="CSS" img="/css.png" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
                        <Lang name="Python" img="/python.png" url="https://www.python.org/" />
                        <Lang name="NumPy" img="/numpy.png" url="https://numpy.org/" />
                        <Lang name="Vite" img="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" url="https://vite.dev/" />
                    </div>
                </div>

                <div className={css.langsSection}>
                    <H2>Good</H2>
                    <div>
                        <Lang name="C" img="https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg" url="https://en.wikipedia.org/wiki/C_(programming_language)" />
                        <Lang name="Java" img="/java.png" url="https://www.java.com/en/" />
                        <Lang name="Rest API" img="/rest.png" url="https://www.ibm.com/topics/rest-apis" />
                        <Lang name="SKLearn" img="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" url="https://scikit-learn.org/" />
                        <Lang name="Linux" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png" url="https://en.wikipedia.org/wiki/Linux" />
                        <Lang name="HTTP" img="https://upload.wikimedia.org/wikipedia/commons/5/5b/HTTP_logo.svg" url="https://developer.mozilla.org/en-US/docs/Web/HTTP" />
                        <Lang name="NPM" img="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" url="https://www.npmjs.com/" />
                    </div>
                </div>

                <div className={css.langsSection}>
                    <H2>OK</H2>
                    <div>
                        <Lang name="Svelte" img="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" url="https://svelte.dev/" />
                        <Lang name="Haskell" img="/haskell.png" url="https://www.haskell.org/" />
                        <Lang name="Next.JS" img="/next.png" url="https://nextjs.org/" />
                        <Lang name="Matplotlib" img="matplotlib.png" url="https://matplotlib.org/" />
                        <Lang name="C++" img="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" url="https://en.wikipedia.org/wiki/C%2B%2B" />
                        <Lang name="PHP" img="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" url="https://www.php.net/" />
                        <Lang name="Maven" img="/maven.png" url="https://maven.apache.org/" />
                    </div>
                </div >

                <div className={css.langsSection}>
                    <H2>Trying to learn</H2>
                    <div>
                        <Lang name="Rust" img="/rust.png" url="https://www.rust-lang.org/" />
                        <Lang name="Dart" img="/dart.png" url="https://dart.dev/" />
                        <Lang name="Kotlin" img="/kotlin.png" url="https://kotlinlang.org/" />
                        <Lang name="Vue" img="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" url="https://vuejs.org/" />
                        <Lang name="Angular" img="/angular.png" url="https://angular.dev/" />
                        <Lang name="IBM Qiskit" img="/qiskit.png" url="https://www.ibm.com/quantum/qiskit" />
                        <Lang name="Q#" img="/qs.png" url="https://learn.microsoft.com/en-us/azure/quantum/qsharp-overview" />
                    </div>
                </div>


            </div>
        </Popup>
    )
}

function Lang({ name, img, url }: { name: string; img: string; url: string; }) {
    return (
        <a href={url} target="_blank" style={{ textDecoration: "none" }}>
            <div className={css.lang}>
                <div>
                    <img src={img} alt={`${name} logo`} />
                </div>
                <P>{name}</P>
            </div>
        </a>
    )
}