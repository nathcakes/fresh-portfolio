import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import ProjectCard from "../components/layout/ProjectCard";
import {useEffect} from "react";
//@ts-ignore
import {themeChange} from "theme-change";


export default function Projects(){
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <>
            <Header title={"Projects"}></Header>
        <div>
            Under Construction.
        </div>
            <div className={"flex-auto"}>
                <ProjectCard title={"Blog"} link={"https://www.github.com/nathcakes/blog" }>This is a basic blog where I share my thoughts</ProjectCard>
            </div>



            <div className={"absolute inset-y-1/3 right-5"}>
                <SideBar></SideBar>
            </div>
            </>
    )
}