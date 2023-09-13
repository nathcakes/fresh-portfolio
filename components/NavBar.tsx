export function NavBar() {
    return (
        <>
            <link rel={"stylesheet"} href={"/underline.css"}/>
            <div class={"flex justify-center z-20 md:flex-none md:justify-none"}>
                <div class={"navbar text-white text-bold text-xl absolute top-8 md:left-20"}>
                    <div class={"grid auto-cols-max grid-flow-col gap-10 md:gap-20"}>
                        <ul>
                            <li>
                                <a href={"/"}>Home</a>
                            </li>
                            <li>
                                <a href={"/about"}>About</a>
                            </li>
                            <li>
                                <a href={"/projects"}>Projects</a>
                            </li>
                            <li>
                                <a href={"/blog"}>Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
