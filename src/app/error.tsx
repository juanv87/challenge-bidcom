'use client'

import { useRouter } from "next/navigation";

export default function Error({ error }: {
    error: Error;
}) {
    const router = useRouter();
    return (
        <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center gap-4">
            <h1 className="text-xl">Ups! Algo salió mal</h1>
            <p>{error.message}</p>
            <button onClick={() => router.push("/")} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Volver al inicio</button>
        </div>
    );
}