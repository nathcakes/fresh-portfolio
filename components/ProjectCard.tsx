
export default function ProjectCard(props: any, children: string){
    return(
    <>
    <div className="card card-compact w-124 bg-base-200 shadow-xl flex">
        <picture><img src="/glitchy-deno.jpg" className={"object-cover rounded-full h-24 w-24"} alt={props.title + " project teaser image."}/></picture>
        <a href={props.ghlink} title={"Check out " + props.title + " on Github."}>
            <picture><img src="/github.svg" className={"object-cover rounded-full h-12 w-12"} alt="Github Icon"/></picture>
        </a>
        <a href={props.link} title={"Check out " + props.title + " in action."}>
            <picture><img src="/link-icon.svg" className={"object-cover rounded-full h-12 w-12"} alt="Link Icon"/></picture>
        </a>
        <div class={"text-l text-white text-center md:text-justify"}>
            <h2 className="card-title text-xl font-bold">Temp Title replace with {props.title}</h2>
            <p>Filler content replace with {props.children}
                Minim anim ut ipsum labore non elit duis occaecat non. Minim anim ut ipsum labore non elit duis occaecat non.</p>
            <a href={props.link}>

            </a>
        </div>
    </div>
        </>
    )}