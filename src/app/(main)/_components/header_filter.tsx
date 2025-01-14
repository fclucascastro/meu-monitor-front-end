'use client';

import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, renderTimeViewClock, DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import "dayjs/locale/pt-br";
import TrashIcon from "./icons/Trash";
import FiltroIcon from './icons/filtro';
import AddIcon from './icons/adicionar';

import dayjs, { Dayjs } from 'dayjs';

interface HeaderFilterProps {
  onClose: () => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({ onClose }) => {
  const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
  const [endTime, setEndTime] = React.useState<Dayjs | null>(null);
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [startDate, setStartDate] = React.useState<Dayjs | null>(null);
  const [endDate, setEndDate] = React.useState<Dayjs | null>(null);
  const [discipline, setDiscipline] = React.useState('');

  const handleStartTimeChange = (time: Dayjs | null) => setStartTime(time);
  const handleEndTimeChange = (time: Dayjs | null) => setEndTime(time);
  const handleStartDateChange = (date: Dayjs | null) => setStartDate(date);
  const handleEndDateChange = (date: Dayjs | null) => setEndDate(date);
  const handleResetTime = () => { setStartTime(null); setEndTime(null); };
  const handleResetDate = () => { setStartDate(null); setEndDate(null); };
  const handleResetDiscipline = () => setDiscipline('');

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

      <div className="relative bg-gray-100 w-[490px] h-[390px] p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-2">
        <div>
    <FiltroIcon/>
  </div>
          <h2 className="ml-1 text-[25px] font-bold">Filtro</h2>
          <button onClick={onClose} className="absolute r-2 right-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="mb-1">
          <label htmlFor="hora" className="block text-sm font-medium items-center">
            <h2 className='text-xl font-bold'>Horário</h2>
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
            <div className="flex items-center space-x-2">
              <DemoContainer components={['TimePicker']}>
                <TimePicker 
                  ampm={false}
                  label="Horário Inicial"
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                  value={startTime}
                  onChange={handleStartTimeChange}
                />
              </DemoContainer>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  ampm={false}
                  label="Horário Final"
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
              </DemoContainer>
              <button onClick={handleResetTime} className="ml-3">
                <div>
                  <TrashIcon/>
                </div>
              </button>
            </div>
          </LocalizationProvider>
        </div>

        <div className="mb-1">
          <label htmlFor="data" className="block text-sm font-medium items-center">
            <h2 className='text-xl font-bold'>Data</h2>
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
            <div className="flex items-center space-x-2">
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Data Inicial"
                  format="DD/MM/YYYY"
                  value={startDate} 
                  onChange={(newDate) => handleStartDateChange(newDate)}
                />
              </DemoContainer>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Data Final"
                  format="DD/MM/YYYY"
                  value={endDate} 
                  onChange={(newDate) => handleEndDateChange(newDate)}
                />
              </DemoContainer>
              <button onClick={handleResetDate} className="ml-3">
                <div>
                  <TrashIcon/>
                </div>
              </button>
            </div>
          </LocalizationProvider>
        </div>
        
        <div className="mb-1">
          <label htmlFor="disciplina" className="block text-sm font-medium items-center">
            <h2 className='text-xl font-bold'>Disciplina</h2>
          </label>
          <ul className="space-y-1 w-[390px] flex items-center">
            <li className="shadow shadow-gray-500 rounded-md bg-zinc-300 p-0.4">
              Fundamentos de Programação     
            </li>
            <button onClick={handleResetDiscipline} className="ml-[4px]">
            <div>
                  <TrashIcon/>
                </div>
            </button>
          </ul>
          <ul className="space-y-1 w-[390px] flex items-center">
            <li className="shadow shadow-gray-500 rounded-md bg-zinc-300 p-0.4">
              Uma Cadeira Da Faculdade Uma Ca
            </li>
            <button onClick={handleResetDiscipline} className="ml-[4px]">
            <div>
                  <TrashIcon/>
                </div>
            </button>
            <button className="">
            <div>
                  <AddIcon/>
                </div>
            </button>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HeaderFilter;