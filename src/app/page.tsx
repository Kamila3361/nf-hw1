import Image from "next/image";
import Listblogs from "./ui/listblogs";
import { promises as fs } from 'fs';

async function getData() {
  const file = await fs.readFile(process.cwd() + '/data/data.json', 'utf8');
  const data = JSON.parse(file);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="bg-gray-200 min-h-screen py-[130px] px-[80px]">
      <Listblogs posts={data}/>
    </div>
  );
}
