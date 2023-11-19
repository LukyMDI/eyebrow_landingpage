import Image from "next/image";

import modelo_1 from "../../../public/images/eyebrow_1.jpg";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('../../public/images/bg-1.webp')] bg-cover bg-no-repeat w-full h-screen min-h-[500px] grid grid-cols-1 grid-rows-3 justify-items-center"
            >
                <div className="flex flex-col items-center text-c_pinkC font-extrabold text-3xl self-center col-span-1">
                    <h1>STUDIO</h1>
                    <h1>CAMILE QUATRIN</h1>
                    <hr className="w-64 border-b-[3px] rounded border-c_purple" />
                </div>
                <div className="self-start col-span-1 z-0">
                    <div className="relative w-40 h-40 border-4 border-solid border-c_purple">
                        <Image
                            src={modelo_1}
                            objectFit="cover"
                            layout="fill"
                            quality={100}
                            priority={true}
                            className="translate-x-9 translate-y-9"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
