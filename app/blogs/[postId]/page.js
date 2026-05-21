'use client';
import blogs from "@/public/data/blog";
import { useParams } from "next/navigation";

export default function PostDetails() {
    const { postId } = useParams();
    const blog = blogs.find((b) => b.id === Number(postId));
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <p className="text-lg text-gray-700">{blog.content}</p>
            </main>
        </div>
    );
}

