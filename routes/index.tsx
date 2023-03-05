import { Head } from "$fresh/runtime.ts"
import {NavBar} from "/components/NavBar.tsx";
import {Container} from "../components/Container.tsx";

const preventMotion = (e: TouchEvent) => {
  window.scrollTo(0, 0);
    e.preventDefault();
    e.stopPropagation();
}
const disableScroll = window.addEventListener("touchmove", preventMotion, {passive: false});

export default function HomePage() {
  return (
      <Container>
        <Head>
          <link rel="stylesheet" href="/atom.css" />
          <title>Nate Brown</title>
          {disableScroll}
        </Head>
        <div class={"hero h-fit min-w-fit overflow-hidden"}>
          <NavBar />
          <div class={"hero-content min-h-screen flex-col mt-5 lg:flex-row-reverse md:mt-none"}>
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
            <h1 class={"text-5xl font-bold text-white text-center md:text-justify"}>Nate Brown</h1>
            <p class={"py-6 text-white"}>
              Full stack developer. Website is still in progress.
            </p>
          </div>
        </div>
      </div>
      </Container>
  );
};