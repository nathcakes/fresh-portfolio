import { Handlers } from "$fresh/server.ts";
import {NavBar} from "../components/NavBar.tsx";

export const handler: Handlers = {
    async GET(req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hi there");
        return resp;
    }
}
export default function AboutPage(){
    return (
        <>
            <NavBar />
        <main>
            <h1>About</h1>
            <p>This is the about page</p>
        </main>
        </>
    );
}