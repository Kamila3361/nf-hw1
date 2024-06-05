import Link from "next/link";

interface Post {
    id: number;
    date: string;
    author: string;
    title: string;
}

export default function Blog({id, date, author, title}: Post){
    return (
        <div>
            <Link href={`/blog/${id}`} className="hover:drop-shadow-2xl">
                <div className="bg-white rounded-3xl w-[300px] h-[300px] flex flex-col justify-center font-sans px-[30px]">
                    <p className="text-lg text-gray-900 mx-1">{date} &#47; {author}</p>
                    <p className="font-bold text-4xl my-1">{title}</p>
                </div>
            </Link>
        </div>
    );
} 