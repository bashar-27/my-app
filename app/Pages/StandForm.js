"use client"
import React, { useState } from 'react';

const StandForm = ({ addCookieStand }) => {
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
      avg: formData.avg
    };

    addCookieStand(newStand);

    setFormData({
      location: '',
      min: '',
      max: '',
      avg: ''
    });
  };

  return (
    <div style={{ backgroundColor: '#6fe6b7', color: 'black', padding: '20px', marginTop: '3%', marginLeft: '15%', border: '2px solid #15b981', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px', textAlign: 'center', width: '100%' }}>
            Create Cookie Stand
          </label>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', width: '100%' }}>
            <label style={{ marginRight: '5px' }}>
              Location
            </label>
            <input type="text" name="location" style={{ width: '100%' }} value={formData.location} onChange={handleChange} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ flex: 1, marginRight: '10px', width: '100%' }}>
              <label>
                Minimum Customer Per Hour
                <input type="text" name="min" style={{ width: '100%' }} value={formData.min} onChange={handleChange} />
              </label>
            </div>
            <div style={{ flex: 1, marginRight: '10px', width: '100%' }}>
              <label>
                Maximum Customer Per Hour
                <input type="text" name="max" style={{ width: '100%' }} value={formData.max} onChange={handleChange} />
              </label>
            </div>
            <div style={{ flex: 1, width: '100%' }}>
              <label>
                Average Cookie Per Sale
                <input type="text" name="avg" style={{ width: '100%' }} value={formData.avg} onChange={handleChange} />
              </label>
            </div>
          </div>
          </div>
          </form>
          </div>

  );
};

export default StandForm;
