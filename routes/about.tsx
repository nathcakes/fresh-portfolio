import { Handlers } from "$fresh/server.ts";
import {NavBar} from "../components/NavBar.tsx";
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
            <NavBar />
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
        </Container>
    );
}