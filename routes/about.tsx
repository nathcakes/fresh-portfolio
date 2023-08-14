import { Handlers } from "$fresh/server.ts";
import {NavBar} from "../components/NavBar.tsx";
import { Head } from "$fresh/runtime.ts"
import { Container } from "/components/Container.tsx";
export const handler: Handlers = {
    async GET(req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hi there");
        return resp;
    }
}

function Card({title, description}: {title: string, description: string}){
    return (
        <div class={"flex flex-col justify-center items-center "}>
            <div class={"flex flex-col justify-center items-center bg-[#242424] p-4 rounded-md"}>
                <h3 class={"text-2xl text-white font-bold"}>{title}</h3>
                <p class={"text-center text-white opacity-60 pt-2"}>{description}</p>
            </div>
        </div>
    );
}


/*
 * Layout plan:
 * On mobile, there will be 1 column that you scroll through.
 * On medium screens there will be 2 columns,
 * On large+ screens there will be 3 columns
 * I need an element for my picture and links
 */
export default function AboutPage(){
    return (
        <Container>
            <Head>
                <title>About Nate</title>
            </Head>
            <NavBar />
            <div class={"max-w-screen-2xl justify-center space-y-10 grid grid-cols-1 mx-auto mt-12 pt-20 px-2 gap-0.5 md:grid-cols-2 lg:grid-cols-3"}>
                <div class={"flex flex-col justify-center items-center md:order-2 lg:order-3"}>
                <picture >
                    <source srcSet={"/headshot.webp"} type={"image/webp"}/>
                    <source srcSet={"/headshot.jpg"} type={"image/jpeg"}/>
                    <img src={"/headshot.jpg"} className={"object-cover object-top rounded-full h-52 w-52"}
                         alt={"Professional headshot of Nate Brown."}/>
                </picture>
                    <div class={"flex flex-row justify-center items-center space-x-4 mt-4"}>
                    <a href={"https://www.linkedin.com/in/nathanial-brown-45657a145/"} target={"_blank"} rel={"noreferrer noopener"} title={"Connect with me on LinkedIn"}><img src={"/linkedin.svg"} alt={"Click here to check out my LinkedIn"} class={"h-8 w-8"}/> </a>
                    <a href={"https://www.github.com/nathcakes"} target={"_blank"} rel={"noreferrer noopener"} title={"Check out my Github!"}><img src={"/github.svg"} alt={"Click here to check out my Github"} class={"h-8 w-8"}/></a>
                    <a href={"mailto:nate@nateb.dev"} target={"_blank"} rel={"noreferrer noopener"} title={"Email me"}><img src={"/envelope-solid.svg"} alt={"Click here to email me."} class={"h-8 w-8"}/></a>
                    </div>
                </div>
                <div class={"mx-8 md:order-1 lg:order-1"}><Card title={"Education"} description={"I am currently studying a Bachelor of Advanced Science (Hons), majoring in Computing at Curtin University in Perth, WA. As part of my course, I studied abroad at Purdue University during Semester 1 2023."}  /></div>
                <div class={"mx-8 md:order-3 lg:order-2"}><Card title={"Passions & Interests"} description={"I've always had a passion for technology and built my first computer solo at the age of 12. I have always enjoyed video games, basketball and have dabbled in some bedroom music production from time to time."}  /></div>
                <div class={"mx-8 md:order-4 lg:order-3"}><Card title={"Junior Backend Dev"} description={"When I started my studies in 2022 I started interning with the backend team at WhereTo. Over the past year I've learnt so much about creating APIs, interacting with databases, Typescript and navigating through a production codebase."}  /> </div>
                <div class={"mx-8 md:order-5 lg:order-4"}><Card title={"Product Support"} description={"I joined WhereTo as a Product Support Specialist in 2021. My focus in this role was to triage and escalate issues reported by customers and internal stakeholders. I also laid the foundations for the Product Support program and documented the product and support workflows."}  /></div>
                <div class={"mx-8 md:order-6 lg:order-6"}><Card title={"Travel Agent"} description={"From 2015 - 2019 I was an Assistant Team Leader for Flight Centre. \n" +
                    "I worked with Retail and SME customers to organize and manage trips. I also managed small teams of 3-8 staff members and gained experience in training new hires. "}  /></div>
                <div class={"mx-8 md:order-7 lg:order-7"}><Card title={"Volunteer Work"} description={"I am passionate about helping my local community and especially inspiring the next generation of programmers. I volunteer at the Curtin branch of Coder Dojo to mentor high school students in programming. I also provided free tutoring in Computer Science classes for first-year students."}  /></div>
            </div>
        </Container>
    );
}