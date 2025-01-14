"use client";

import Header from "./_components/header";
import TableItem from "./_components/table-item";
import { Schedule, ScheduleItem } from "../../@types";

export default async function Home() {
  const schedule: Schedule = {
    "Segunda-Feira": [
      {
        Nome: "Matemática Discreta",
        Hora: "12:30h - 13:30h",
        Local: "Bloco 2 Sala 4",
        Andar: "1º Andar",
      },
      {
        Nome: "Estrutura de Dados",
        Hora: "14:00h - 15:00h",
        Local: "Bloco 2 Sala 5",
        Andar: "1º Andar",
      },
      { 
        Nome: "Física - I", 
        Hora: "15:30h - 16:30h", 
        Local: "Bloco 2 Sala 6",
        Andar: "1º Andar",
      },
    ],
    "Terça-Feira": [
      {
        Nome: "Fundamentos da Programação",
        Hora: "12:30h - 13:30h",
        Local: "Bloco 3 Sala 1",
        Andar: "2º Andar",
      },
    ],
    "Quarta-Feira": [
      {
        Nome: "Matemática Discreta",
        Hora: "10:00h - 11:00h",
        Local: "Bloco 4 Sala 2",
        Andar: "1º Andar",
      },
      { 
        Nome: "Cálculo - I", 
        Hora: "11:30h - 12:30h", 
        Local: "Bloco 4 Sala 3",
        Andar: "1º Andar",
      },
    ],
    "Quinta-Feira": [
      {
        Nome: "Almoço com Código",
        Hora: "08:00h - 09:00h",
        Local: "Bloco 5 Sala 1",
        Andar: "Térreo",
      },
    ],
    "Sexta-Feira": [
      {
        Nome: "Arquitetura de Computadores",
        Hora: "09:00h - 10:00h",
        Local: "Bloco 4 Sala 3",
        Andar: "1º Andar",
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-14 py-14">
        <section className="flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-8 rounded-sm bg-[#031229] p-5">
          <div className="grid w-full grid-cols-5 gap-8">
            {Object.keys(schedule).map((day) => (
              <p
                key={day}
                className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white"
              >
                {day}
              </p>
            ))}
          </div>
          <div className="grid h-full w-full grid-cols-5 gap-8 overflow-y-auto">
            {Object.keys(schedule).map((day, index) => (
              <div key={index} className="flex h-1 flex-col gap-4 pb-4">
                {schedule[day as keyof Schedule].map(
                  (item: ScheduleItem, idx: number) => (
                    <TableItem
                      key={idx}
                      Nome={item.Nome}
                      Hora={item.Hora}
                      Local={item.Local}
                      Andar={item.Andar}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
