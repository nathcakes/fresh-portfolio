#!/usr/bin/env -S deno run -A --watch=static/,routes/
//Dev entry point for the project
import dev from "$fresh/dev.ts";

await dev(import.meta.url, "./main.ts");
