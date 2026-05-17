import blogs from "@/public/data/blog";
export default async function Blogs() {
  // const response = await fetch('https://api.vercel.app/blog');
  // const blogs = await response.json();

  const uniqueCatagories = [...new Set(blogs.map(blog => blog.category))];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          This is the blogs page.
        </h1>
        
        <ul className="mt-6 space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b border-gray-200 pb-4">
              <h3 className="text-xl text-black dark:text-zinc-50">{blog.title}</h3>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-semibold leading-8 tracking-tight text-black dark:text-zinc-50">
            List ofUnique Categories:
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