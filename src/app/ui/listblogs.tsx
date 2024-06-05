import Blog from "./blog";

interface Post {
    id: number;
    date: string;
    author: string;
    title: string;
}

interface Props{
    posts: Post[];
}

export default function Listblogs({posts}: Props){
    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 place-items-center">
            {posts.map((post: any) =>(
                <Blog key={post.id} id={post.id} title={post.title} author={post.author} date={post.date}/>
            ))}
        </div>
    );
}
