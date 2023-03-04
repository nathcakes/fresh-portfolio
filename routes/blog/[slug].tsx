import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "/utils/posts.ts";
import { NavBar } from "/components/NavBar.tsx";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import {Container} from "/components/Container.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  }
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
      <Container>
      <NavBar />
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: "h2 {\n" +
                "    font-size: 1.5em;\n" +
                "    font-weight: bold;\n" +
                "    margin: 0.67em 0;\n" +
                "    text-align: left;\n" +
                "    color: white;\n" +
                "}\n" +"h2>a {\n" +
                "    display: none;\n" +
                "}"

          }} />
        </Head>
        <main class={"max-w-screen-md px-4 pt-16 mx-auto"}>
          <h1 class={"text-5xl font-bold text-white "}>{post.title}</h1>
          <time class={"text-white opacity-60"}>
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
            </time>
          <div data-color-mode="dark" data-dark-theme="dark" class={"mt-8 markdown-body text-white opacity-81"} dangerouslySetInnerHTML={{ __html: render(post.content) }} />
          <a class={"btn text-white"} href={"/blog"}> Back to All Posts</a>
        </main>
      </Container>
  );
}
