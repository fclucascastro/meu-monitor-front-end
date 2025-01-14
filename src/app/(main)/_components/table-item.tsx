import { useState } from "react";
import { PlusIcon, Cross1Icon } from "@radix-ui/react-icons";
import { ScheduleItem } from "@/@types";
import DescricaoIcon from "./icons/descricacao";
import DisciplinaIcon from "./icons/disciplinas";
import MonitoresIcon from "./icons/monitores";
import HorariosIcon from "./icons/horas";
import SalasIcon from "./icons/salas";
import DataIcon from "./icons/data";
import ObservacaoIcon from "./icons/observacoes";

const TableItem: React.FC<ScheduleItem> = ({ Nome, Hora, Local, Andar }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [selectedDays, setSelectedDays] = useState<string[]>([
    //dias aos quais tem essa monitoria
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
  ]);

  const toggleDetails = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!showDetails) {
      const rect = event.currentTarget.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setPosition({
        top: rect.top + rect.height / 2 + scrollY,
        left: rect.left + rect.width / 2,
      });
    }
    setShowDetails(!showDetails);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const removeDay = (day: string) => {
    setSelectedDays(selectedDays.filter((d) => d !== day));
  };

  const formatLocal = (local: string, andar: string) => {
    const parts = local.split(" ");
    const bloco = parts[1];
    const sala = parts[3];
    return `Sala ${sala} - Bloco ${bloco} - ${andar}`;
  };

  
  return (
    <div className="relative">
      <div className="rounded bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
        <p className="text-lg font-bold">{Nome}</p>
        <p>{Hora}</p>
        <div className="flex flex-row items-center justify-between">
          <p>{Local}</p>
          <button
            onClick={toggleDetails}
            className="cursor-pointer text-[#0A8967] hover:text-black"
          >
            <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
          </button>
        </div>
      </div>
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="w-[680px] rounded-lg bg-neutral-100 pb-7 pl-7 pr-5 pt-5 shadow-lg">
            <div className="mb-1 mt-1 flex items-center justify-between">
              <div className="flex items-center">
                <DescricaoIcon />
                <h1 className="mb-0 pl-[10px] text-3xl font-semibold">
                  Descrição
                </h1>
              </div>
              <button onClick={closeDetails} className="text-black">
                <Cross1Icon className="mr-3 h-6 w-6" />
              </button>
            </div>
            <p className="text-[22px] font-semibold">{Nome}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className=" drop-shadow-md">
                <div className="mb-1 flex items-center drop-shadow-md">
                  <DisciplinaIcon />
                  <h3 className="pl-3 text-xl font-medium">Disciplinas</h3>
                </div>
                <ul className="w-[280px] text-base font-medium space-y-2">
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Fundamentos de Programação
                  </li>
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Programação Orientada a Objetos
                  </li>
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Estrutura de Dados
                  </li>
                </ul>
              </div>
              <div className="ml-10">
                <div className="mb-1 flex items-center shadow-black drop-shadow-md">
                  <MonitoresIcon />
                  <h3 className="pl-3 text-xl font-medium">Monitores</h3>
                </div>
                <ul className="w-[250px] text-base font-medium space-y-2">
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Monitor 01
                  </li>
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Monitor 02
                  </li>
                  <li className="rounded bg-zinc-300/55 p-0.5 shadow shadow-zinc-500">
                    Monitor 03
                  </li>
                </ul>
              </div>
              <div className=" drop-shadow-md">
                <div className="mb-1 flex items-center  drop-shadow-md">
                  <HorariosIcon />
                  <h3 className="pl-3 text-xl font-medium">Horários</h3>
                </div>
                <ul>
                  <li className="flex w-[280px] items-center justify-center rounded font-medium bg-zinc-300/55 p-1 shadow shadow-zinc-500">
                    <p>{Hora}</p>
                  </li>
                </ul>
              </div>
              <div className="ml-10 drop-shadow-md">
                <div className="mb-1 flex items-center">
                  <SalasIcon />
                  <h3 className="pl-3 drop-shadow-md text-xl font-medium">Salas</h3>
                </div>
                <ul>
                  <li className="flex w-[250px] rounded justify-start pl-4 bg-zinc-300/55 p-1 text-base font-medium shadow shadow-zinc-500">
                    <p>{formatLocal(Local, Andar)}</p>
                  </li>
                </ul>
              </div>
              <div className=" drop-shadow-md">
                <div className="mb-1 flex items-center">
                  <DataIcon />
                  <h3 className="pl-3 mt-1 text-xl font-medium drop-shadow">
                    Dias
                  </h3>
                </div>
                <ul className="grid grid-cols-3 gap-y-2 mt-2">
                  {selectedDays.map((day, index) => (
                    <li
                      key={index}
                      className="h-[20.81px] w-[74.66px] shadow-zinc-500 flex justify-between items-center rounded bg-zinc-300/55 text-xs font-medium shadow pl-1 pr-1 text-center"
                      style={{
                        gridColumn: index % 3 + 1,
                        gridRow: Math.floor(index / 3) + 1,
                      }}
                    >
                      <span>{day}</span>
                      <button
                        onClick={() => removeDay(day)}
                        className="text-black"
                      >
                        <Cross1Icon className="w-2 " />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-10 drop-shadow-md">
                <div className="mt-1 flex items-center shadow-black drop-shadow-md">
                  <ObservacaoIcon />
                  <h3 className="pl-6 text-xl font-medium">Observações</h3>
                </div>
                <textarea
                  className="w-[250px] mt-2 text-xs rounded bg-zinc-300/55 shadow shadow-zinc-500"
                  rows={3.5}
                ></textarea>
              </div>
            </div>
            <div className="mr-3 mt-4 flex justify-end">
              <button className="inline-flex h-[32px] w-[119px] items-center justify-center rounded bg-emerald-500 font-['Arial'] text-lg font-medium text-white shadow-md shadow-gray-400">
                ADICIONAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableItem;
