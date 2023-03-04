import { join } from "https://deno.land/std@0.178.0/path/mod.ts";
import { extract } from "https://deno.land/std@0.178.0/encoding/front_matter/any.ts";
export interface Post {
    slug: string;
    title: string;
    publishedAt: Date;
    content: string;
    snippet: string;
}

//This is the function that grabs all the posts from the folder, and returns them as an array of Post objects
export async function getPosts():Promise<Post[]> {
    const files = Deno.readDir("./posts");
    const promises = [];
    for await (const file of files) {
        const slug = file.name.replace(".md", "");
        promises.push(getPost(slug));
    }
    const posts = await Promise.all(promises) as Post[];
    posts.sort((a,b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    return posts;
}

//Helper function that returns a single Post object
export async function getPost(slug: string): Promise<Post | null> {
    const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
    const { attrs, body } = extract(text);
    return {
        slug,
        title: attrs.title,
        publishedAt: new Date(attrs.published_at),
        content: body,
        snippet: attrs.snippet
    };
}