import Image from "next/image";

import modelo_1 from "../../../public/images/eyebrow_1.jpg";

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-[url('../../public/images/bg-1.webp')] bg-cover bg-no-repeat w-full h-screen min-h-[500px] grid grid-cols-1 grid-rows-2 place-items-center"
            >
                <div className="flex flex-col items-center">
                    <h3>STUDIO</h3>
                    <h1>CAMILE QUATRIN</h1>
                    <hr className="w-64 border-b-[3px] border-black" />
                </div>
                <div>
                    <div className="relative w-96 h-96 border-4 border-solid border-c_purple">
                        <Image
                            src={modelo_1}
                            objectFit="cover"
                            layout="fill"
                            quality={100}
                            className="translate-x-9 translate-y-9"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
