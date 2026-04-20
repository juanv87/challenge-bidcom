import Image from "next/image";
import { SearchBar } from "../SearchBar/SearchBar";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex flex-row items-center bg-primary py-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-4">
                <div className="col-span-1 md:col-span-2 flex items-center justify-center md:justify-start">
                    <Link href="/">
                        <Image
                            src="/logo_bidcom.svg"
                            alt="Logo Bidcom"
                            width={130}
                            height={30}
                            priority
                        />
                    </Link>
                </div>
                <div className="col-span-10 md:col-span-6 md:col-start-4 flex justify-center px-4 md:px-0">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
}