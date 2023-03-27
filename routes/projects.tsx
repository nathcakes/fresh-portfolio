import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";
import { Head } from "$fresh/runtime.ts"
// import MotionCard from "/islands/MotionCard.tsx";

// function Card(card:project){
//     return (
//         <div class={"flex flex-col justify-center items-center"}>
//             <div class={"flex flex-col justify-center items-center bg-[#242424] p-4 rounded-md"}>
//                 <h3 class={"text-2xl font-bold"}>{card.title}</h3>
//                 <p class={"text-center"}>{card.description}</p>
//                 <a href={card.link} class={"text-blue-500"}>Check it out</a>
//             </div>
//         </div>
//     );
// }

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

// class project {
//     title: string;
//     description: string;
//     link: string;
//     constructor(title: string, description: string, link: string){
//         this.title = title;
//         this.description = description;
//         this.link = link;
//     }
// }
// const Carousel = (card:project) => {
//     return(<>
//     <AnimatePresence mode={"popLayout"}>
//         <motion.div key={card}
//                     initial={{x: -300}}
//                     anime={{x:0}}
//                     exit={{x:300}}
//         >
//             {Card(card)}
//         </motion.div>
//     </AnimatePresence>
//         </>
//     );
// }
//        <main class={"max-w-screen-md px-4 pt-16 mx-auto mt-20"}>
//             <MotionCard title={"test"} description={"name"} link={"stuff"}/>
//
//         </main>


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
        </Container>
    );
}