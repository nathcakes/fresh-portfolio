import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";
import { Head } from "$fresh/runtime.ts"
import ProjectCard from "/components/ProjectCard.tsx";


export default function ProjectsPage(){
    // const projects:Array<project> = [];

    return (
        <Container>
            <Head><title>Nate's Projects</title>
            </Head>
            <NavBar />
            <div class={"max-w-screen-7xl px-4 pt-16 mt-16"}>
                <div class={"flex flex-row flex-wrap md:flex-nowrap justify-items-center"}>
                    <ProjectCard class={"basis-1/2"} source={"/copilot-theme.png"} title={"IntelliJ Copilot Dark Theme"} link={"https://plugins.jetbrains.com/plugin/19537-copilot-dark-theme"}
                                 ghlink={"https://github.com/nathcakes/Copilot-Dark-Theme-IntelliJ"}>
                        Inspired by the colours from Github's original Co-Pilot announcement page and a <a href={"https://marketplace.visualstudio.com/items?itemName=BenjaminBenais.copilot-theme"}>VSCode Extension</a>  of the same name,
                        I created my first IntelliJ theme. I had to refer to developer docs and use IntelliJ's element inspector to get details on new UI elements that hadn't been documented yet.
                    </ProjectCard>
                    <ProjectCard source={"/copilot-theme.png"} class={"basis-1/2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ProjectCard>
                </div>
                {/*
                <div className={"flex flex-row flex-wrap md:flex-nowrap justify-items-center"}>
                    <ProjectCard class={"md:basis-1/2"}/>
                    <ProjectCard class={"md:basis-1/2"}/>
                </div>
                <div className={"flex flex-row flex-wrap md:flex-nowrap justify-items-center"}>
                    <ProjectCard class={"md:basis-1/2"}/>
                    <ProjectCard class={"md:basis-1/2"}/>
                </div>
                <div className={"flex flex-row flex-wrap md:flex-nowrap justify-items-center"}>
                    <ProjectCard class={"md:basis-1/2"}/>
                    <ProjectCard class={"md:basis-1/2"}/>
                </div>
                */}
            </div>

        </Container>
    );
}