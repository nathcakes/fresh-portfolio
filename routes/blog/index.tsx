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
            </a>
        </div>
    );
}

export default function BlogPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <Container>
            <Head><title>Nate's Thoughts</title></Head>
        <NavBar />
            <main class={"max-w-screen-md px-4 pt-16 mx-auto"}>
                <h1 class={"text-5xl text-white font-bold"}>Blog</h1>
                <div class={"mt-8"}>
                    {posts.map((post) => <PostCard post={post} />)}
                </div>
            </main>
        </Container>
    )
}

