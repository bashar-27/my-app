"use client"
import { useState } from 'react'

const CreateForm = ({ onCreate }) => {
  const [location, setlocation] = useState('');
  const [owner, setowner] = useState('');
  const [description, setdescription] = useState('');
  const [max_Customer_Per_Hour,setmax_Customer_Per_Hour]=useState(0);
  const [min_Customer_Pre_Hour,setmin_Customer_Pre_Hour]=useState(0);
  const [average_Cookies_Per_Sale,setaverage_Cookies_Per_Sale]=useState(0);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
        location,
      description,
      max_Customer_Per_Hour: parseInt(max_Customer_Per_Hour),
      min_Customer_Pre_Hour: parseInt(min_Customer_Pre_Hour),
      average_Cookies_Per_Sale: parseFloat(average_Cookies_Per_Sale),
    owner,
    };
    onCreate(newCookieStand);

  };

  return (
<div>  <div className="flex justify-center items-center pt-12">
        <form className="w-4/6 rounded-lg  bg-emerald-300 flex content-box flex-col items-center  p-5" onSubmit={handleSubmit} >
        <p className='text-2xl font-bold  '>Create Cookie stand</p>
            <div className="flex flex-wrap -mx-3 mb-6 w-full ">
                <div className="w-full">
                    <label className="block uppercase tracking-wide  text-gray-700 text-xs  font-bold mb-2" htmlFor="grid-password "  >
                     Location
                    </label>
                    <input required onChange={(e)=>setlocation(e.target.value)} value={location} className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder={location}>
                    </input>
                </div>
            </div>
        
           
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Min. Customer per Hour
                    </label>
                    <input required onChange={(e)=>setmin_Customer_Pre_Hour(e.target.value)} value={min_Customer_Pre_Hour}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder={min_Customer_Pre_Hour}>
                    </input></div>

                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                Max. Customer per Hour
                    </label>
                    <input required onChange={(e)=>setmax_Customer_Per_Hour(e.target.value)} value={max_Customer_Per_Hour}  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={max_Customer_Per_Hour}>
                    </input>  </div>  
                        <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Avg. Cookie per  Sales
                    </label>
                    <input  required  onChange={(e)=>setaverage_Cookies_Per_Sale(e.target.value)} value={average_Cookies_Per_Sale}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder={average_Cookies_Per_Sale}>
                    </input>
                    
                   </div>   
                   <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    owner
                    </label>
                    <input required   onChange={(e)=>setowner(e.target.value)} value={owner}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={owner}>
                    </input>
                    
                   </div>  
                   <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    description
                    </label>
                    <input  required  onChange={(e)=>setdescription(e.target.value)} value={description}   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={description}>
                    </input>
                    
                   </div>  
                    <div className="w-full md:w-1/6  px-3 mb-6 md:mb-0">
                   <button className=' bg-emerald-400 font-bold text-2xl min-h-full min-w-full rounded-lg' type="submit"  > Create</button>
                   </div>   
            </div>
        </form></div>
  </div>
    
  );
};

export default CreateForm;