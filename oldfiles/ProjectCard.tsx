import Link from "next/link";

export default function ProjectCard(props: any, children: string){
    return(
    <>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.children}</p>
            <Link href={props.link}>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Check It Out</button>
            </div>
            </Link>
        </div>
    </div>
        </>
    )}