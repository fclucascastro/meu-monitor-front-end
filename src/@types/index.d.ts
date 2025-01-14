export type userProps = {
  name: string
  email: string
}

declare module 'next-auth' {
  interface Session {
    token: string
    user: userProps
  }
}

export type ScheduleItem = {
  Nome: string;
  Hora: string;
  Local: string;
  Andar: string;
};

export type Schedule = {
  "Segunda-Feira": ScheduleItem[];
  "Terça-Feira": ScheduleItem[];
  "Quarta-Feira": ScheduleItem[];
  "Quinta-Feira": ScheduleItem[];
  "Sexta-Feira": ScheduleItem[];
};