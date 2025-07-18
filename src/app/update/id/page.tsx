export default function Create() {
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
            <h2>Update</h2>
            Hello, Update
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
