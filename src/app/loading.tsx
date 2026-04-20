const Loading = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
                <li key={i} className="border border-gray-200 rounded-lg p-4">
                    <div className="w-full flex flex-col items-center">
                        <div className="border-gray-200 border-b flex flex-col items-center w-full my-2 py-2">
                            <div className="w-48 h-48 bg-gray-200 animate-pulse"></div>
                        </div>
                        <h3 className="w-48 h-4 bg-gray-200 animate-pulse"></h3>
                        <p className="w-48 h-4 bg-gray-200 animate-pulse"></p>
                        <p className="w-48 h-4 bg-gray-200 animate-pulse"></p>
                        <p className="w-48 h-4 bg-gray-200 animate-pulse"></p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Loading;