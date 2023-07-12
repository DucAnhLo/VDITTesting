import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarRef = useRef(null);
  const datePickerRef = useRef(null);

  const handleEventDrop = (eventDropInfo) => {
    // Handle the event drop logic here
    console.log('Event dropped:', eventDropInfo.event);
  };

  const handleEventResize = (eventResizeInfo) => {
    // Handle the event resize logic here
    console.log('Event resized:', eventResizeInfo.event);
  };

  const handleDateClick = (arg) => {
    // Handle the calendar date click
    alert(arg.dateStr);
  };

  const handleDateChange = (date) => {
    // Handle the date picker change
    setSelectedDate(date);
  };

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  const renderDatePicker = () => {
    return (
      <div className="header-date-picker">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="custom-datepicker"
          ref={datePickerRef}
          onClickOutside={() => datePickerRef.current.setOpen(false)}
        />
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          start: 'today prev,next',
          center: renderDatePicker,
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        datesSet={(arg) => setSelectedDate(arg.start)}
        height={'100vh'}
        slotMinTime={'06:00:00'}
        slotMaxTime={'24:00:00'}
        events={[]}
        editable={true}
        eventDrop={handleEventDrop}
        eventResize={handleEventResize}
        nowIndicator={true}
        businessHours={{
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
