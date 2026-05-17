'use client';
import blogs from "@/public/data/blog";
import { useParams } from "next/navigation";

export default function PostDetails() {
    const { postId } = useParams();
    const blog = blogs.find((b) => b.id === Number(postId));
    return (
        <div>
            <h1>{blog?.title}</h1>
            <p>{blog?.content}</p>
        </div>
    );
}

