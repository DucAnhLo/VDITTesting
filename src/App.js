import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Calendar/>
        </div>
      </div>
    </div>
  );
}

export default App;
