"use client";

import { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa6";

import { lato } from "@/styles/fonts/fonts";

import FormSkeleton from "@/components/skeletons/FormSkeleton";

registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

export default function Agendamento() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        numero: "",
        data: "",
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // console.log(formData);

        try {
            if (
                !formData.nome ||
                !formData.email ||
                !formData.numero ||
                !formData.data
            ) {
                setResult("Todos os campos precisam ser preenchidos!");
                setLoading(false);
                return;
            }

            const response = await fetch("/api/agendamento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Agendamento feito: ", data);
                setResult("Agendamento realizado com sucesso!");
                setFormData({
                    nome: "",
                    email: "",
                    numero: "",
                    data: "",
                });
                setLoading(false);
            } else {
                console.error("Erro ao agendar:", response.status);
            }
        } catch (error) {
            console.error("Erro ao agendar:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            data: date,
        });
    };

    return (
        <div className="w-5/6 h-3/6 flex flex-col items-center mb-5    lg:my-60">
            <div className="mb-7">
                <h1
                    className={`${lato.className} text-white font-black text-2xl text-center    lg:text-3xl`}
                >
                    AGENDE UM HORÁRIO
                </h1>
                <div className="bg-c_purpleC w-62 h-[3px]" />
            </div>
            {loading ? (
                <FormSkeleton />
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full h-full flex-col items-center justify-evenly border border-solid border-c_purpleC rounded bg-white px-5   md:w-4/6    lg:w-5/6 lg:rounded-md"
                >
                    {result && (
                        <div
                            className={`${
                                result.includes("sucesso")
                                    ? "text-green-600"
                                    : "text-red-600"
                            } w-full flex justify-center`}
                        >
                            <span className="w-5/6">{result}</span>
                        </div>
                    )}
                    <div className="flex flex-col items-center w-full relative">
                        <FaUser className="absolute left-2 bottom-2" />
                        <label htmlFor="nome" className="text-black hidden">
                            Insira seu nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="outline-none px-1 text-black border-b border-black w-full mt-5 bg-transparent pl-[35px]"
                            placeholder="Nome"
                            name="nome"
                            onChange={handleChange}
                            value={formData.nome}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full relative">
                        <FaEnvelope className="absolute left-2 bottom-2" />
                        <label htmlFor="email" className="text-black hidden">
                            Insira seu email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="outline-none px-1 text-black border-b border-black w-full bg-transparent pl-[35px]"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full relative">
                        <FaPhone className="absolute left-2 bottom-2" />
                        <label htmlFor="numero" className="text-black hidden">
                            Insira seu número
                        </label>
                        <input
                            type="tel"
                            id="numero"
                            className="outline-none px-1 text-black border-b border-black w-full bg-transparent pl-[35px]"
                            placeholder="Telefone"
                            name="numero"
                            onChange={handleChange}
                            value={formData.numero}
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <DatePicker
                            selected={formData.data}
                            onChange={handleDateChange}
                            dateFormat={"dd/MM/yyyy HH:mm"}
                            timeFormat="HH:mm"
                            locale={"pt-BR"}
                            showTimeSelect
                            showIcon
                            minDate={new Date()}
                            minTime={new Date().setHours(8, 0, 0)}
                            maxTime={new Date().setHours(18, 0, 0)}
                            className="outline-none text-black border rounded border-black bg-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-c_purpleC text-white p-2 rounded border border-black w-full"
                    >
                        Agendar
                    </button>
                </form>
            )}
        </div>
    );
}
