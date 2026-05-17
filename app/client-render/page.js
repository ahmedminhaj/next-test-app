'use client';

import blogs from '../../public/data/blog.js';

export default function ClientComponent() {
  console.log(blogs);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          This is the client render page.
        </h1>
        <ul className="mt-6 space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b border-gray-200 pb-4">
              <h3 className="text-xl text-black dark:text-zinc-50">{blog.title}</h3>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}