import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts"
import { NavBar } from "/components/NavBar.tsx";
import  { Post, getPosts} from "/utils/posts.ts";
import { Container } from "/components/Container.tsx";



/*
    * Custom handler that grabs data from the posts folder to render
 */
export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await getPosts();
        return ctx.render(posts);
    }
}



//This needs to be updated, this should be the style of the card
function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
        <div class="py-8 border(t white)">
            <a class={"sm:col-span-2"} href={`/blog/${post.slug}`}>
                <div class={"bg-[#242424] p-4 rounded-md"}>
                <h3 class={"text(3xl white) font-bold"}>
                    {post.title}
                </h3>
                <time class={"text-white opacity-60"}>
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div class={"mt-4 text-white opacity-70"}>
                    {post.snippet}
                </div>
                </div>
            </a>
        </div>
    );
}

export default function BlogPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <Container>
            <Head><title>Nate's Thoughts</title>
                <link href={"/animations.css"} rel={"stylesheet"} />
            </Head>

        <NavBar />
            <main class={"max-w-screen-md px-4 pt-16 mx-auto mt-20"}>
                <h1 class={"text-5xl text-white font-bold"}>My latest thoughts<span class="tripleAnim"></span></h1>
                <h4 class={"text-xl text-white"}>All posts are submissions for NPSC2001 Reflection Journal</h4>
                <div class={"mt-4"}>
                    {posts.map((post) => post.status=== "draft" ? <></> : <PostCard post={post} />)}
                </div>
            </main>
        </Container>
    )
}

