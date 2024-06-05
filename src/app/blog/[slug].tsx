import { useRouter } from "next/router";
import { promises as fs } from 'fs';

async function getData() {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
  const data = JSON.parse(file);
  return data;
}

export default async function Page(){
    const data = await getData();
    const router = useRouter();
    const id = Number(router.query.slug);
    const odata = data.find((post: any) => post.id === id);
    return(
        <div className="bg-white rounded-3xl w-[1000px] h-[300px] flex flex-col justify-center font-sans px-[30px]">
            <p className="text-lg text-gray-900 mx-1">{odata.date} &#47; {odata.author}</p>
            <p className="font-bold text-4xl my-1">{odata.title}</p>
            <p>{odata.description}</p>
        </div>
    );
}