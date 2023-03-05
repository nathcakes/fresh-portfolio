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
export default function AboutPage(){
    return (
        <Container>
            <Head>
                <title>About Nate</title>
            </Head>
            <NavBar />
            <div class={"relative inset-1/2 top-20"}>
        <main class={"mt-15"}>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
            </div>
        </Container>
    );
}