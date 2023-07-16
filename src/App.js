import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import CustomDatePicker from './components/DatePicker';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


  function App({children}) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <div>
            <Navbar />
          </div>

          <div className='flex'>
            <Sidebar />
            <div className='flex-1'>
              {/* <div className='date-picker-container'>
                <CustomDatePicker className='date-picker' />
              </div> */}
              <Calendar/>
            </div>
          </div>
        </div>
      </LocalizationProvider>
    );
  }

  export default App;
