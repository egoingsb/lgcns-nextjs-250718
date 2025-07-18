export default async function Read({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <h1>
                <a href="/">Web</a>
            </h1>
            <ol>
                <li>
                    <a href="/read/1">html</a>
                </li>
                <li>
                    <a href="/read/2">css</a>
                </li>
            </ol>
            <h2>Read!!</h2>
            Hello, {id}
            <ul>
                <li>
                    <a href="/create">create</a>
                </li>
                <li>
                    <a href="/update/id">update</a>
                </li>
                <li>
                    <button>delete</button>
                </li>
            </ul>
        </div>
    );
}
