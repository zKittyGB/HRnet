import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "../../css/home/DatePickerMod.css"

export default function DatePickerMod() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker className="date_picker" selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };