import Footer from "@/components/_ui/Footer";
import Navbar from "@/components/_ui/Navbar";
import Contato from "@/components/sections/Contato";
import Home from "@/components/sections/Home";
import Servicos from "@/components/sections/Servicos";
import SobreNos from "@/components/sections/SobreNos";

export default function Page() {
    return (
        <div className="w-full flex flex-col scroll-smooth">
            <Navbar />
            <Home />
            <SobreNos />
            <Servicos />
            <Contato />
            <Footer />
        </div>
    );
}
