import { lato } from "@/styles/fonts/fonts";
import BoxServices from "../BoxServices";

export default function Servicos() {
    return (
        <section
            id="servicos"
            className="bg-[url('../../public/images/eyebrow_3.webp')] bg-cover bg-no-repeat flex justify-center"
        >
            <div className="w-full flex flex-col items-center">
                <div className="my-10 flex flex-col items-center">
                    <h1
                        className={`${lato.className} font-black text-2xl text-white`}
                    >
                        SERVICOS
                    </h1>
                    <div className="bg-c_purpleC w-36 h-[3px]" />
                </div>
                <BoxServices />
            </div>
        </section>
    );
}
