export default async function Read({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const resp = await fetch("http://localhost:9999/topics/" + id);
    const topic = await resp.json();
    return (
        <div>
            <h2>{topic.title}</h2>
            {topic.body}
        </div>
    );
}
