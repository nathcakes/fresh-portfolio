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
            __html: CSS

          }} />
          <link rel={"stylesheet"} href={"/md.css"}/>
        <title>{post.title}</title>
        </Head>
        <main className={"max-w-screen-md px-4 pt-16 mx-auto"}>
          <h1 className={"text-4xl font-bold text-white mt-16"}>{post.title}</h1>
          <time className={"text-white opacity-60"}>
            {new Date(post.publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
            </time>
          <div data-color-mode="dark" data-dark-theme="dark" className={"mt-8 mb-8 markdown-body opacity-81"} dangerouslySetInnerHTML={{ __html: render(post.content,) }} />
          <a className={"btn rounded-full bg-white py-2 px-4 mt-8 text-black font-bold"} href={"/blog"}>Back</a>
        </main>
      </Container>
  );
}
