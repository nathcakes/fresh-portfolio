import Head from "next/head";
import {useEffect} from "react";
//@ts-ignore
import {themeChange} from "theme-change"
export default function Header(props: any){
    //Required to make theme changer work
    useEffect(() => {
        themeChange(false);
    }, []);
    return(
        <>
    <Head>
        <title>{props.title}</title>
        <meta
            name="Nate Brown's Portfolio Site"
            content="Nate Brown is a full stack developer."
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
        />
    </Head>
    <div className="absolute inset-y-5 right-10">
        <label className={"label cursor-pointer"}>
            <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
                <input
                    type="checkbox"
                    className="toggle toggle-md"
                    defaultChecked
                />
                <span className={"label-text pl-3 relative -inset-y-2"} ><strong>Theme</strong></span>
            </button>
        </label>
    </div>
            </>)
}