import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendar = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className=''>
      <DayPicker
      className='bg-white w-full sm:w-80 mx-auto p-4 m-auto rounded shadow-2xl'
        defaultMonth={new Date()}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer} />
    </div>
  );
};

export default Calendar;