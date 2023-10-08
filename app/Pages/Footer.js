import React from 'react';


const Footer = (props) => {
  return (
    <div style={{position:"relative",bottom:0,marginTop:"15px",width:"100%",textAlign:'left'}}>
    <div style={{ backgroundColor: '#15b981' , padding: '10px', color:'black',fontSize:'20px'}} class="w-screen">
    <p>{props.locationCount} Location World Wide</p>
   </div>
  </div>
  );
};

export default Footer;