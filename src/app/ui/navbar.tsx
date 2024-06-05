import Image from "next/image";

export default function Navbar(){
    return (
        <div className="flex flex-row justify-between bg-gray-200 fixed inset-x-0 top-0 items-center py-6 px-6 z-10">
            <div className="flex justify-between w-48 font-sans">
                <p>Blog</p>
                <p>About</p>
                <p>Gallery</p>
            </div>
            <p className="text-5xl font-sans font-medium">Tech</p>
            <div className="flex flex-row justify-between w-28">
                <Image
                    src="/twitter.svg"
                    alt="twitter icon"
                    width={20}
                    height={20}
                />
                <Image
                    src="/youtube.svg"
                    alt="youtube icon"
                    width={20}
                    height={20}
                />
                <Image
                    src="/instagram.svg"
                    alt="instagram icon"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
}