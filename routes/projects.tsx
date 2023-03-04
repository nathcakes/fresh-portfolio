import {NavBar} from '/components/NavBar.tsx';
import { Container } from "/components/Container.tsx";

export default function ProjectsPage(){
    return (
        <Container>
            <NavBar />
        <main>
            <h1>Projects</h1>
            <p>This is the projects page</p>
        </main>
        </Container>
    );
}