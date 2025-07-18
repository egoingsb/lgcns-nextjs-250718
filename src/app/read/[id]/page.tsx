export default async function Read({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <h2>Read!!</h2>
            Hello, {id}
        </div>
    );
}
