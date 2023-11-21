import Image from "next/image";

import modelo_1 from "../../../public/images/eyebrow_1.jpg";
import { lato } from "@/styles/fonts/fonts";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('../../public/images/bg-1.webp')] bg-cover bg-no-repeat w-full h-screen min-h-[500px] grid grid-cols-1 grid-rows-3 justify-items-center"
            >
                <div
                    className={`${lato.className} flex font-playfair flex-col items-center text-c_pinkC font-black text-3xl self-center col-span-1`}
                >
                    <h1>STUDIO</h1>
                    <h1>CAMILE QUATRIN</h1>
                    <hr className="w-64 border-b-[3px] rounded border-c_purple" />
                </div>
                <div className="w-full flex justify-center col-span-1 z-0">
                    <div className="relative w-4/6 h-4/6 border-4 border-solid border-c_purple">
                        <Image
                            src={modelo_1}
                            objectFit="cover"
                            fill
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
