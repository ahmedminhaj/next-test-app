'use client';

import {useParams} from 'next/navigation'

export default  function PostDetails() {
    const params = useParams();
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h3 className="text-xl font-bold"> {params.title} </h3>
        </div>
    );
}