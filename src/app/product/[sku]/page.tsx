export default async function ProductPage({
    params
}: {
    params: Promise<{ sku: string }>
}) {
    const { sku } = await params;
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>{sku}</h1>
        </div>
    );
}