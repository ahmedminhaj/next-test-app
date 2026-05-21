import blogs from "@/public/data/blog";

export default async function Categories() {
    const uniqueCatagories = [...new Set(blogs.map(blog => blog.category))];
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold mb-4">Blog Categories</h1>
                <h2 className="mt-10 text-2xl font-semibold leading-8 tracking-tight text-black dark:text-zinc-50">
                    List of Unique Categories:
                </h2>
                <ul className="mt-4 space-y-2">
                    {uniqueCatagories.map((category, index) => (
                        <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
                        {category}
                        </li>
                    ))}
                </ul>
                <br />
                <h3 className="text-lg font-semibold text-gray-800">Total Unique Categories: {uniqueCatagories.length}</h3>
            </main>
        </div>
    );
}