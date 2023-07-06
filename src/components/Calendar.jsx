import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

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

  return (
    <div>
      <FullCalendar
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
