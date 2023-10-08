// ./app/Pages/Main.js
"use client"
import React, { useState } from 'react';
import ReportTable from './ReportTable'
import CreateForm from './CreateForm'; // Import the CreateForm component
import { hoursOfOperation } from './hoursOfOperation';
import Footer from './Footer';


const Main = () => {
  const [formData, setFormData] = useState({
    location: '',
    min: '',
    max: '',
    avg: ''
  });

  const [cookieStands, setCookieStands] = useState([]);

 

  const handleCreate = (newStand) => {
    setCookieStands([...cookieStands, newStand]);
    setFormData({
      location: '',
      min: '',
      max: '',
      avg: ''
    });
  };

  return (
    <div className="flex flex-col items-center justify-center s-screen ">
    <div className="mt-4 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
      <CreateForm onCreate={handleCreate} />
      <div className="mt-8 w-full max-w-4xl">
      <ReportTable hours={hoursOfOperation} reports={cookieStands} />
     
      </div>
    </div>
    <Footer locationCount={cookieStands.length} />
    </div>
  );
};

export default Main;