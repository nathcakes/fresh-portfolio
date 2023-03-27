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
                <p class={"text-center text-white opacity-60"}>{description}</p>
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
            <div class={"max-w-screen-2xl justify-center space-y-10 grid grid-cols-1 mx-auto mt-20 pt-20 px-2 gap-0.5 md:grid-cols-2 lg:grid-cols-3"}>
                <div class={"flex flex-col justify-center items-center md:order-2 lg:order-3"}>
                <picture >
                    <source srcSet={"/headshot.webp"} type={"image/webp"}/>
                    <source srcSet={"/headshot.jpg"} type={"image/jpeg"}/>
                    <img src={"/headshot.jpg"} className={"object-cover object-top rounded-full h-52 w-52"}
                         alt={"Professional headshot of Nate Brown."}/>
                </picture>
                    <div class={"flex flex-row justify-center items-center space-x-4 mt-4"}>
                    <a href={"https://www.linkedin.com/in/nathanial-brown-45657a145/"} target={"_blank"} rel={"noreferrer noopener"}><img src={"/linkedin.svg"} alt={"Click here to check out my LinkedIn"} class={"h-8 w-8"}/> </a>
                    <a href={"https://www.github.com/nathcakes"} target={"_blank"} rel={"noreferrer noopener"}><img src={"/github.svg"} alt={"Click here to check out my Github"} class={"h-8 w-8"}/></a>
                    <a href={"mailto:nate@nateb.dev"} target={"_blank"} rel={"noreferrer noopener"}><img src={"/envelope-solid.svg"} alt={"Click here to email me."} class={"h-8 w-8"}/></a>
                    </div>
                </div>
                <div class={"md:order-1 lg:order-1"}><Card title={"Education"} description={""}  /></div>
                <div class={"md:order-3 lg:order-2"}><Card title={"Passions & Interests"} description={"Test.text"}  /></div>
                <div class={"md:order-4 lg:order-3"}><Card title={"Work Experience"} description={"Test.text"}  /> </div>
                <div class={"md:order-5 lg:order-4"}><Card title={"Work Experience"} description={"Test.text"}  /></div>
                <div class={"md:order-6 lg:order-6"}><Card title={"Work Experience"} description={"Test.text"}  /></div>
            </div>
        </Container>
    );
}