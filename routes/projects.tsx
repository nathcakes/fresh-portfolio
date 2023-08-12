import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";
import { Head } from "$fresh/runtime.ts"
import ProjectCard from "/components/ProjectCard.tsx";

function Card({title, description}: {title: string, description: string}){
    return (
        <div class={"flex flex-col justify-center items-center "}>
            <div class={"flex flex-col justify-center items-center bg-[#242424] p-4 rounded-md"}>
                <h3 class={"text-2xl text-white font-bold"}>{title}</h3>
                <p class={"text-center text-white opacity-60"}>{description}</p>
                <p class={"text-center text-white font-bold"}> Checkout my Github!</p>
            </div>
        </div>
    );
}


export default function ProjectsPage(){
    // const projects:Array<project> = [];
    // let card = soon;
    // projects.push(card);
    return (
        <Container>
            <Head><title>Nate's Projects</title>
            </Head>
            <NavBar />
            <div class={"max-w-screen-md px-4 pt-16 mx-auto mt-20"}>
                <a href={"https://www.github.com/nathcakes"} target={"_blank"} rel={"noreferrer noopener"}>
                <Card  title={"I'm Still Working On Making This Page Fantastic"} description={"In the meantime, please checkout my github for some projects I've worked on."}/>
                </a>
            </div>
            <ProjectCard/>
        </Container>
    );
}