
export function ProjectCard(props: any, children: string){
    return(
    <>
    <div className="card card-compact bg-[#242424] rounded-xl m-5 flex flex-row-reverse lg:flex-row flex-nowrap">
        <div className={"space-y-36 mr-4 w-1/4"}>
        <picture className={"flex items-start "}><img src={props.source} className={"rounded-full pt-5 pl-5 h-auto w-full"} alt={props.title + " project teaser image."}/></picture>
        <div className={"flex flex-col-reverse items-end sm:hidden"}>

            <a href={props.link} title={"Check out " + props.title + " in action."}>
                <picture><img src="/link-icon.svg" className={"object-fit rounded-full h-12 w-12 mx-8 mt-4 mb-2"} alt="Link Icon"/></picture>
            </a>
            <a href={props.ghlink} title={"Check out " + props.title + " on Github."}>
                <picture><img src="/github.svg" className={"object-fit rounded-full h-12 mx-8 mt-5"} alt="Github Icon"/></picture>
            </a>
        </div>
        </div>
        <div class={"text-l text-white  md:text-justify p-2 m-4 w-3/4"}>
            <h2 className="flex flex-nowrap card-title text-3xl font-bold">{props.title}</h2>
            <p className={"pt-4"}>{props.children}</p>
            <div className={"hidden sm:flex flex-row-reverse md:mt-2"}>

                <a href={props.link} title={"Check out " + props.title + " in action."}>
                    <picture><img src="/link-icon.svg" className={"object-fit rounded-full h-10 w-10 sm:visible"} alt="Link Icon"/></picture>
                </a>
                <a href={props.ghlink} title={"Check out " + props.title + " on Github."}>
                    <picture><img src="/github.svg" className={"object-fit rounded-full h-10 mx-8 sm:visible"} alt="Github Icon"/></picture>
                </a>

            </div>
        </div>

    </div>
        </>
    )}


export function InProgressProjectCard(props: any, children: string){
    return(
        <>
            <div className="card card-compact bg-[#242424] rounded-xl m-5 flex flex-row-reverse lg:flex-row flex-nowrap">
                <div className={"space-y-36 mr-4 w-1/4"}>
                    <picture className={"flex items-start "}><img src={props.source} className={"rounded-full pt-5 pl-5 h-auto w-full"} alt={props.title + " project teaser image."}/></picture>
                </div>
                <div class={"text-l text-white  md:text-justify p-2 m-4 w-3/4"}>
                    <h2 className="flex flex-nowrap card-title text-3xl font-bold">{props.title}</h2>
                    <p className={"pt-4"}>{props.children}</p>
                </div>

            </div>
        </>
    )}