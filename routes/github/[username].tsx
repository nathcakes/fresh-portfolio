/* Example of fetching data from the github API and displaying the user image, name and login name. */


import { Handlers, PageProps} from "$fresh/server.ts";

/*Define your data interface. */
interface User {
    login: string;
    name: string;
    avatar_url: string;
}

/*Your handler should be doing the API fetching and then pass the data to ctx.render() */
export const handler: Handlers<User | null> = {
    async GET(_req, ctx) {
        const { username } = ctx.params;
        const resp = await fetch(`https://api.github.com/users/${username}`);
        if (resp.status === 404) {
            return ctx.render(null);
        }
        const user: User = await resp.json();
        return ctx.render(user);
    }
};

/*Your page component should then be able to access the data via the props.data field.
* You should have a case for when the data doesn't exist */
export default function Page({ data }: PageProps<User | null>) {
    if (!data) {
        return <h1>User not found</h1>;
    }

    return (
        <div>
            <img src = {data.avatar_url} width={64} height={64} />
            <h1>{data.name}</h1>
            <p>{data.login}</p>
        </div>
    );
}