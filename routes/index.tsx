import { Head } from "$fresh/runtime.ts"
import {NavBar} from "/components/NavBar.tsx";
import {Container} from "../components/Container.tsx";

//Enhancement idea: hover the area and the icons line up to the right of it (underneath for mobile)
//Each icon is either a link to a project or info about what I know about it idk.
export default function HomePage() {
  return (
      <Container>
        <Head>
          <link rel="stylesheet" href="/atom.css" />
          <title>Nate Brown</title>
          <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
        </Head>
        <div class={"hero h-screen min-w-fit overflow-hidden overscroll-none"}>
          <NavBar />
          <div class={"hero-content flex-col h-screen mt-5 lg:flex-row-reverse md:mt-none"}>
          <div id="atom">
            <div class={"orbit"}>
              <div class={"path"}>
                <div class={"electron"}>
                  <div class={"nodeLogoFix"}>
                  <img src={"/node.svg"} alt={"NodeJS logo"}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class={"orbit"}>
              <div class={"path"}>
                <div class={"electron"}>
                  <div class={"reactFix"}>
                    <img src={"/react.svg"} alt={"React logo"}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class={"orbit"}>
              <div class={"path"}>
                <div class={"electron"}>
                  <div class={"tsLogoFix"}>
                  <img src={"/typescript.svg"} alt={"Typescript logo"}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class={"orbit"}>
              <div class={"path"}>
                <div class={"electron"}>
                  <div class={"javaLogoFix"}>
                  <img src={"/java.svg"} alt={"Java logo"}></img>
                  </div>
                  </div>
              </div>
            </div>
            <div class={"orbit"}>
              <div class={"path"}>
                <div class={"electron"}>
                  <div class={"pythonFix"}>
                  <img src={"/python.svg"} alt={"Python logo"}></img>
              </div>
                </div>
              </div>
            </div>

          <div id={"nucleus"}>
            <picture>
              <source srcset={"/profile.webp"} type={"image/webp"} />
              <source srcset={"/profile.jpg"} type={"image/jpeg"} />
              <img src={"/profile.jpg"} class={"object-cover rounded-full h-64 w-64"} alt={"Headshot of Nate Brown, with electrons circling like an atom."} />
            </picture>
          </div>
          </div>
          <div>
            <h1 class={"text-5xl font-bold text-white text-center md:text-justify"}>Hi I'm Nate! </h1>
            <p class={"py-6 text-white "}>
              I'm a junior backend developer and <br></br>
              student with a passion for technology. I want to <br></br>
              work on projects that makes peoples lives easier <br></br>
              in an effortless and intuitive way.
            </p>
          </div>
        </div>
      </div>
      </Container>
  );
};