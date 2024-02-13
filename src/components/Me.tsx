import React from "react";
import { Button } from "./bootstrap/Button";

export function Me() {
  return (
    <>
      <img src="/me.png" />
      <h1 className="text-white">Zakariya Khaled</h1>
      <p className="text-white">
        I am a passionate up and coming Computer Science and Maths graduate
        (currently in my final year!) with a keen interest in Quantum, Machine
        Learning and Software Engineering!
      </p>

      <Button href="https://www.linkedin.com/in/mzk468/">My LinkedIn</Button>
      <Button href="https://github.com/mzk468/">My GitHub</Button>
      <Button href="/CV.pdf">My CV</Button>
    </>
  );
}
