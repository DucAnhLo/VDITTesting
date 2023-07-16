import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';
import { LocalizationProvider, DatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

function Calendar() {
  const events = [
    {
      title: 'Example Event',
      start: '2023-07-03T10:00:00',
      end: '2023-07-03T12:00:00',
    },
    {
      title: 'Example Event',
      start: '2023-07-03T10:30:00',
      end: '2023-07-03T12:30:00',
    },
  ];
  const handleEventDrop = (eventDropInfo) => {
    // Handle the event drop logic here
    console.log('Event dropped:', eventDropInfo.event);
  };

  const handleEventResize = (eventResizeInfo) => {
    // Handle the event resize logic here
    console.log('Event resized:', eventResizeInfo.event);
  };
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
  const [date, setDate] = useState('');

  const calendarRef = useRef(null);
  
  const handleDateChange = (selectedDate) => {
    // Get a reference to the calendar instance
    const calendarApi = calendarRef.current.getApi();
    
    // Convert the selected date to a dayjs object
    const selectedDayjs = dayjs(selectedDate);

    // Check if the selected date is before the current date
    
    calendarApi.gotoDate(selectedDayjs.toDate());


    // Update the state with the selected date
    setDate(selectedDate);
  };

  return (
    <div>
      <div className=' flex justify-center m-2'>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label=""
          value={date}
          onChange={handleDateChange}
          format="DD-MM-YYYY"
        />
      </LocalizationProvider>
      </div>
      <FullCalendar
        ref={calendarRef}
        className="calendar-container"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height={'100vh'}
        slotMinTime={'6:00:00'}
        slotMaxTime={'24:00:00'}
        events={events}
        editable={true}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        nowIndicator={true}
        businessHours={{
          // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
          startTime: '10:00', // a start time (10am in this example)
          endTime: '18:00', // an end time (6pm in this example)
        }}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default Calendar;
