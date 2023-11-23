"use client";

import { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import { FaUser, FaPhone } from "react-icons/fa6";

import { lato } from "@/styles/fonts/fonts";

registerLocale("pt-BR", ptBR);
setDefaultLocale("pt-BR");

export default function Agendamento() {
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);
    };

    return (
        <div className="w-5/6 h-3/6 flex flex-col items-center mb-5">
            <div className="mb-7">
                <h1
                    className={`${lato.className} text-white font-black text-2xl text-center`}
                >
                    AGENDE UM HORÁRIO
                </h1>
                <div className="bg-c_purpleC w-62 h-[3px]" />
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex w-full h-full flex-col items-center justify-evenly border border-solid border-c_purpleC rounded bg-white"
            >
                <div className="flex flex-col items-center w-5/6 relative">
                    <FaUser className="absolute left-2 bottom-2" />
                    <label htmlFor="nome" className="text-black hidden">
                        Insira seu nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        className="outline-none px-1 text-black border-b border-black w-full mt-5 bg-transparent pl-[35px]"
                        placeholder="Nome"
                    />
                </div>
                <div className="flex flex-col items-center w-5/6 relative">
                    <FaPhone className="absolute left-2 bottom-2" />
                    <label htmlFor="numero" className="text-black hidden">
                        Insira seu número
                    </label>
                    <input
                        type="tel"
                        id="numero"
                        className="outline-none px-1 text-black border-b border-black w-full bg-transparent pl-[35px]"
                        placeholder="Telefone"
                    />
                </div>
                <div className="w-full flex justify-center">
                    {/* <input
                        type="datetime-local"
                        name=""
                        id=""
                        className="outline-none"
                        value={data}
                        onChange={(e) => setDate(e.target.value)}
                    /> */}
                    <DatePicker
                        selected={data}
                        onChange={(date) => setData(date)}
                        dateFormat={"dd/MM/yyyy HH:mm"}
                        timeFormat="HH:mm"
                        locale={"pt-BR"}
                        showTimeSelect
                        showIcon
                        className="outline-none text-black border-b border-black bg-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-c_purpleC p-2 rounded border border-black"
                >
                    Agendar
                </button>
            </form>
        </div>
    );
}
