import Link from "next/link";

export default function MobileNav(){
    <div className="navbar bg-base-200">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><Link href={"/index"}><a>Home</a></Link></li>
                <li><Link href={"/about"}><a>About</a></Link></li>
                <li><Link href={"/projects"}><a>Projects</a></Link></li>
                <li><Link href={"/contact"}><a>Contact</a></Link></li>
            </ul>
        </div>
    </div>
}
//TODO: figure out how to display this only for mobile screens
//Tailwind by default will show this on smallest screen without any prefix
//Currently my sidebar has m: prefix to only display on medium screens.
//Maybe I need to use JS? Not sure
