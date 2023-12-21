import MiniBoxServices from "./MiniBoxServices";
import { FaFan } from "react-icons/fa6";

export default function BoxServices() {
    return (
        <div className="grid grid-rows-2 grid-cols-2 gap-5 w-5/6 text-c_purpleC    md:w-7/12">
            <MiniBoxServices
                title={"Design de Sobrancelhas"}
                icon={<FaFan />}
            />
            <MiniBoxServices title={"Massagem Facial"} icon={<FaFan />} />
            <MiniBoxServices title={"Manutenção"} icon={<FaFan />} />
            <MiniBoxServices title={"Henna"} icon={<FaFan />} />
        </div>
    );
}
