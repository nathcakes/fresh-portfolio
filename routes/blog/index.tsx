import { Handlers, PageProps } from "$fresh/server.ts";
import { NavBar } from "/components/NavBar.tsx";
import  { Post, getPosts} from "/utils/posts.ts";



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
        <div class="py-8 border(t gray-200)">
            <a class={"sm:col-span-2"} href={`/blog/${post.slug}`}>
                <h3 class={"text(3xl gray-900) font-bold"}>
                    {post.title}
                </h3>
                <time class={"text-gray-500"}>
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div class={"mt-4 text-gray-900"}>
                    {post.snippet}
                </div>
            </a>
        </div>
    );
}

export default function BlogPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <>
        <NavBar />
            <main class={"max-w-screen-md px-4 pt-16 mx-auto"}>
                <h1 class={"text-5xl font-bold"}>Blog</h1>
                <div class={"mt-8"}>
                    {posts.map((post) => <PostCard post={post} />)}
                </div>
            </main>
        </>
    )
}

