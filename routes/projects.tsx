import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";
import { Head } from "$fresh/runtime.ts"


export default function ProjectsPage(){
    return (
        <Container>
            <Head><title>Nate's Projects</title></Head>
            <NavBar />
        <main>
            <h1>Projects</h1>
            <p>This is the projects page</p>
        </main>
        </Container>
    );
}