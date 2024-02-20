import { Button } from "./bootstrap/Button";

export function Me() {
  return (
    <div className="container-fluid align-middle">
      {" "}
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {" "}
        <div className="col-md pr-5" style={{ marginRight: 20 }}>
          {" "}
          <img
            src="/me.png"
            alt="Profile"
            className="img-fluid float-end"
            style={{
              height: "45vh",
              width: "45vh",
              filter: "drop-shadow(3px 3px 5px #333)",
            }}
          />{" "}
        </div>{" "}
        <div className="col-md pl-5" style={{ marginLeft: 20 }}>
          {" "}
          <h1
            style={{
              fontSize: "5vh",
              filter: "drop-shadow(0px 0px 5px #000)",
            }}
            className="space-mono text-white text-start"
          >
            <strong>Zakariya Khaled</strong>
          </h1>{" "}
          <p
            className="text-white text-start fs-3 img-fluid inter"
            style={{
              width: "50vh",
              filter: "drop-shadow(3px 3px 2px #000)",
            }}
          >
            {" "}
            I am a passionate up and coming Computer Science and Maths graduate
            (currently in my final year!) with a keen interest in Quantum,
            Machine Learning and Software Engineering!{" "}
          </p>{" "}
          <Button
            marginRight={10}
            bootstrapClasses="btn-primary"
            href="https://www.linkedin.com/in/mzk468/"
          >
            <img
              style={{ width: "2rem", height: "2rem" }}
              src="/linkedin.png"
              alt="linkedin"
            />{" "}
            LinkedIn
          </Button>{" "}
          <Button
            marginRight={10}
            bootstrapClasses="btn-dark"
            href="https://github.com/mzk468/"
          >
            <img
              style={{ width: "2rem", height: "2rem" }}
              src="/github.png"
              alt="github"
            />{" "}
            GitHub
          </Button>{" "}
          <Button
            marginRight={10}
            bootstrapClasses="btn-warning"
            href="https://devpost.com/mzk468"
          >
            <img
              style={{ width: "2rem", height: "2rem" }}
              src="/devpost.png"
              alt="devpost"
            />{" "}
            Devpost
          </Button>{" "}
        </div>{" "}
        <div style={{ position: "absolute", bottom: 0, marginBottom: 40 }}>
          <a
            href="#projects"
            style={{
              textDecoration: "none",
            }}
          >
            <center>
              <p
                className="fs-4 inter"
                style={{
                  color: "white",
                }}
              >
                Projects Section coming soon!
              </p>
              <img className="align-bottom" src="/down.png" hidden></img>
            </center>
          </a>
        </div>
      </div>{" "}
    </div>
  );
}
