'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Welcome to HYF Next App!
        </h3>
        <div className="mt-6 w-full space-y-4 text-xl text-gray-700 dark:text-gray-300">
          <div className="border-b border-gray-200 pb-4 hover:text-blue-500 cursor-pointer " onClick={() => router.push('/dogs')}>
            Random Dog
          </div>
          <div className="border-b border-gray-200 pb-4 hover:text-blue-500 cursor-pointer" onClick={() => router.push('/blogs')}>
            Blogs
          </div>
          <div className="border-b border-gray-200 pb-4 hover:text-blue-500 cursor-pointer" onClick={() => router.push('/blogs/categories')}>
            Categories
          </div>
          <div className="border-b border-gray-200 pb-4 hover:text-blue-500 cursor-pointer" onClick={() => router.push('/server-render')}>
            Server rendering
          </div>
          <div className="border-b border-gray-200 pb-4 hover:text-blue-500 cursor-pointer" onClick={() => router.push('/client-render')}>
            Client rendering
          </div>
        </div>
      </main>
    </div>
  );
}