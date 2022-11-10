import React, { useRef } from "react";
// import "../css/tickets.css";
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import { FormHelperText } from "@mui/material";

 const options = {
   
    minDate: "today",
    maxDate: new Date().fp_incr(7)
    
  }

const Calendar = () => {
  const calendarRef = useRef(null)
    
//   const openCalendar = () => {
//     calendarRef.current.flatpickr.open()
//   }

  return (
    <div>
      {/* <button onClick={openCalendar}>Test</button> */}
        <Flatpickr      
          ref={calendarRef}
          options={options}
          placeholder="Select date..."
          required
        />
    </div>
  )
}

export default function Calendario() {
  return (
    <div>
        
       {/* <FormHelperText className='  text-center'>Choose the day</FormHelperText> */}
       <br/><br/>
      <Calendar />
    </div>
  );
}
