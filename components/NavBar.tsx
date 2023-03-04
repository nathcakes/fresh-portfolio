

export function NavBar(){
    return (
        <div class={"navbar text-white absolute top-8 left-10"}>
            <div class={"grid auto-cols-max grid-flow-col gap-10 "}>
        <a class={""} href={"/"}>Home</a>
        <a href={"/about"}>About</a>
        <a href={"/projects"}>Projects</a>
        <a href={"/blog"}>Blog</a>
            </div>
        </div>
    )
}