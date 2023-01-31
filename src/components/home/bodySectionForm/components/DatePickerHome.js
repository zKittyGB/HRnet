import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "../../../../css/home/DatePickerMod.css";
import { useDispatch } from "react-redux";

export default function DatePickerMod({ classValue, id, title, error, p }) {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="dateArea" id={classValue}>
      <label htmlFor={id}>{title}</label>
      <DatePicker
        //use to separate the birth date picker and the dateStart picker
        className={classValue}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          dispatch({
            type: `set` + classValue,
            payload: {
              date: date.toString().substring(4, 15).replace(/ /g, "-"),
            },
          });
        }}
      />
      <div id={error}>
        <p>{p}</p>
      </div>
    </div>
  );
}
