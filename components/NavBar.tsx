

export function NavBar(){
    return (
        <div class={"flex justify-center z-20 md:flex-none md:justify-none"}>
        <div class={"navbar text-white absolute top-8 md:left-20"}>
            <div class={"grid auto-cols-max grid-flow-col gap-10 md:gap-20"}>
        <a class={""} href={"/"}>Home</a>
        <a href={"/about"}>About</a>
        <a href={"/projects"}>Projects</a>
        <a href={"/blog"}>Blog</a>
            </div>
        </div>
        </div>
    )
}