import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const CustomDatePicker = ({children}) => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker
      label=""
      value={selectedDate}
      onChange={(newValue) => setSelectedDate(newValue)}
    />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;