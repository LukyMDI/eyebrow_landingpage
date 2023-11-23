"use client";

import { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

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
        <div className="w-5/6 h-3/6 flex flex-col items-center">
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
                className="flex w-full h-full flex-col items-center justify-evenly border border-solid border-white rounded bg-c_purpleC"
            >
                <div className="flex flex-col">
                    <label htmlFor="nome" className="text-white">
                        Insira seu nome
                    </label>
                    <input
                        type="text"
                        id="nome"
                        className="outline-none px-1 rounded-sm text-c_purpleC caret-c_purpleC"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="numero" className="text-white">
                        Insira seu número
                    </label>
                    <input
                        type="tel"
                        id="numero"
                        className="outline-none px-1 rounded-sm text-c_purpleC caret-c_purpleC"
                    />
                </div>
                <div>
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
                        className="outline-none text-center rounded text-c_purpleC"
                    />
                </div>
                <button type="submit" className="bg-white p-2 rounded">
                    Agendar
                </button>
            </form>
        </div>
    );
}
