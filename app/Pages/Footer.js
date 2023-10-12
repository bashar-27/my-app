import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
function Footer() {
  const [reports, setReports] = useState([]);
    useEffect(() => {
      axios.get('https://api-cookies.azurewebsites.net/cookiestand')
        .then((response) => {
          setReports(response.data);
    
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [reports]);
    return (
      <footer className="absolute inset-x-0 bottom-0 h-16 text-xl  bg-emerald-400">
        <p className="text-white">{reports.length} Locations World Wide</p>
      </footer>
    );
  }
  
  export default Footer;