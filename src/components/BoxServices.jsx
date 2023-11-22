import MiniBoxServices from "./MiniBoxServices";
import { FaFan } from "react-icons/fa6";

export default function BoxServices() {
    return (
        <div className="grid grid-rows-3 grid-cols-2 gap-5 w-5/6 text-c_purpleC">
            {/* <div className="border-2 h-[60px]">
                <span>Design de Sobracelhas</span>
            </div>
            <div className="border-2 h-[60px]">
                <span>Henna</span>
            </div>
            <div className="border-2 h-[60px]">
                <span>Manutenção</span>
            </div>
            <div className="border-2 h-[60px]">
                <span>Sem nome</span>
            </div>
            <div className="border-2 h-[60px]">
                <span>Sem nome</span>
            </div>
            <div className="border-2 h-[60px]">
                <span>Sem nome</span>
            </div> */}
            <MiniBoxServices
                title={"Design de Sobrancelhas"}
                icon={<FaFan />}
            />
            <MiniBoxServices title={"Henna"} icon={<FaFan />} />
            <MiniBoxServices title={"Manutenção"} icon={<FaFan />} />
            <MiniBoxServices title={"Sem Nome"} icon={<FaFan />} />
            <MiniBoxServices title={"Sem Nome"} icon={<FaFan />} />
            <MiniBoxServices title={"Sem Nome"} icon={<FaFan />} />
        </div>
    );
}
