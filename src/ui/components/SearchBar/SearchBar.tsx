"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "../../icons/SearchIcon";

export const SearchBar = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("s") as string;
        if (!query) return;
        router.push(`/search?s=${query}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row items-center w-full">
            <input type="text" name="s" placeholder="Buscar" className="px-4 py-2 bg-white w-full rounded-l-sm" />
            <button className="bg-gray-200 cursor-pointer px-4 py-2 rounded-r-sm hover:bg-gray-300" type="submit">
                <SearchIcon color="black" />
            </button>
        </form>
    );
}