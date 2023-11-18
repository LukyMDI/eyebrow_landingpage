import Navbar from "@/components/_ui/Navbar";
import Home from "@/components/sections/Home";
import SobreNos from "@/components/sections/SobreNos";

export default function Page() {
    return (
        <div className="w-100 flex flex-col items-center scroll-smooth">
            <Navbar />
            <Home />
            <SobreNos />
        </div>
    );
}
