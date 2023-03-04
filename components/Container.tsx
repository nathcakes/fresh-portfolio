import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export type Props = {
    children: ComponentChildren;
};

export const Container = ({ children }: Props) => {
    return (<>
            <div style={{ minHeight: "100vh" }}>
                <Head>
                    <link href={"/global.css"} rel={"stylesheet"} />
                </Head>
                {children}
            </div>
            </>
        );
}