"use client"
import React, { useState } from 'react';

const CreateForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    location: '',
    min: '',
    max: '',
    avg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStand = {
      location: formData.location,
      min: formData.min,
      max: formData.max,
      avg: formData.avg,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    };

    onCreate(newStand);

    setFormData({
      location: '',
      min: '',
      max: '',
      avg: ''
    });
  };

  return (
    <div className="bg-green-300 p-4 mb-4 border-2 border-green-900 rounded">
           <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px', textAlign: 'center', width: '100%' }}>
            Create Cookie Stand
          </label>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
            <label style={{ marginRight: '5px' }}>
              Location
            </label>
            <input 
              type="text" 
              name="location" 
              style={{ width: '100%' }} 
              value={formData.location} 
              onChange={handleChange} 
           //   placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].location : ''}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ flex: 1, marginRight: '10px', width: '75%' }}>
              <label>
                Minimum Customer Per Hour
                <input type="text" name="min" style={{ width: '100%' }} value={formData.min} onChange={handleChange}
                // placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].min : ''}
                 />
              </label>
            </div>
            <div style={{ flex: 1, marginRight: '10px', width: '75%' }}>
              <label>
                Maximum Customer Per Hour
                <input type="text" name="max" style={{ width: '100%' }} value={formData.max} onChange={handleChange} 
               // placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].max : ''}
                />
              </label>
            </div>
            <div style={{ flex: 1, width: '75%' }}>
              <label>
                Average Cookie Per Sale
                <input type="text" name="avg" style={{ width: '100%' }} value={formData.avg} onChange={handleChange} 
               // placeholder={cookieStands.length > 0 ? cookieStands[cookieStands.length - 1].avg : ''}
                />
              </label>
            </div>
          </div>

          <button type="submit" style={{ marginTop: '10px', backgroundColor: '#15b981', width: '100%', height: '50px', borderRadius: '5px' }}>
            Create
          </button>
        </div>
      </form>

    </div>
  );
};

export default CreateForm;