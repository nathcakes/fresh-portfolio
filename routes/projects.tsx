import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";
import { Head } from "$fresh/runtime.ts"
import {ProjectCard, InProgressProjectCard} from "/components/ProjectCard.tsx";


export default function ProjectsPage(){
    // const projects:Array<project> = [];

    return (
        <Container>
            <Head><title>Nate's Projects</title>
            </Head>
            <NavBar />
            <div class={"max-w-fit px-4 pt-16 mt-16"}>
                <div class={"flex flex-row justify-center flex-wrap lg:flex-nowrap "}>
                    <ProjectCard class={"max-w-prose"} source={"/copilot-theme.png"} title={"IntelliJ Copilot Dark Theme"} link={"https://plugins.jetbrains.com/plugin/19537-copilot-dark-theme"}
                                 ghlink={"https://github.com/nathcakes/Copilot-Dark-Theme-IntelliJ"}>
                        Inspired by the colours from Github's original Co-Pilot announcement page and a <a href={"https://marketplace.visualstudio.com/items?itemName=BenjaminBenais.copilot-theme"}>VSCode Extension</a>  of the same name,
                        I created my first IntelliJ theme. I had to refer to developer docs and use IntelliJ's element inspector to get details on new UI elements that hadn't been documented yet.
                    </ProjectCard>
                    <InProgressProjectCard source={"/ml-icon.png"} class={"max-w-prose"} title={"NLP for Diabetes Diagnosis"}>
                        I'm currently working on a Natural Language Processing algorithm to diagnose diabetes from a patient's medical history. This work is being completed as an undergraduate research project under the supervision of Dr. Md Zakir Hossain.
                        Upon completion and marking, the code will be open sourced on github and I will link to my project report here.
                    </InProgressProjectCard>
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