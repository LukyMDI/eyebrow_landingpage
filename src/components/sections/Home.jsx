import Image from "next/image";

import modelo_1 from "../../../public/images/eyebrow_1.jpg";
import { lato } from "@/styles/fonts/fonts";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('../../public/images/bg-1.webp')] bg-cover bg-no-repeat w-full h-screen min-h-[500px] flex flex-col items-center justify-evenly"
            >
                <div
                    className={`${lato.className} flex font-playfair flex-col items-center text-white font-black text-3xl self-center mt-16`}
                >
                    <h1 className="text-lg">REALÇANDO A BELEZA</h1>
                    <h1>DO SEU OLHAR</h1>
                    <hr className="w-56 border-b-[3px] rounded border-c_purpleC" />
                </div>
                <div className="w-full h-1/5 flex justify-center z-0">
                    <div className="relative w-5/6 border-4 border-solid border-c_purpleC rounded-md">
                        <Image
                            src={modelo_1}
                            objectFit="cover"
                            fill
                            quality={100}
                            priority={true}
                        />
                    </div>
                </div>
                <div className="border-4 rounded-md border-white w-11/12 bg-black/70 p-5 overflow-auto box-border">
                    <div
                        className={`${lato.className} text-white text-center font-black text-lg`}
                    >
                        <h1>STUDIO</h1>
                        <h1>CAMILE QUATRIN</h1>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-3 mt-1">
                        <div className="w-16 rounded-full bg-gray-500 h-[3px]" />
                        <span className="text-c_purpleC font-black">
                            Since 2023
                        </span>
                        <div className="w-16 rounded-full bg-gray-500 h-[3px]" />
                    </div>
                    <div className="text-white text-justify mt-3">
                        <p>
                            Transforme o olhar, eleve a confiança. Descubra o
                            poder de sobrancelhas perfeitamente moldadas e
                            desenhadas sob medida para você. Deixe minha paixão
                            pela arte das sobrancelhas realçar sua beleza única.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
