import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "../../../../css/home/DatePickerMod.css";
import { useDispatch } from "react-redux";

export default function DatePickerMod(props) {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const propsValue = Object.values(props)[0];
  const idInput = Object.values(props)[1];
  const idTitle = Object.values(props)[2];
  const idError = Object.values(props)[3];
  const pValue = Object.values(props)[4];

  return (
    <div className="dateArea" id={propsValue}>
      <label htmlFor={idInput}>{idTitle}</label>
      <DatePicker
        //use to separate the birth date picker and the dateStart picker
        className={propsValue}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          dispatch({
            type: `set` + propsValue,
            payload: {
              date: date.toString().substring(4, 15).replace(/ /g, "-"),
            },
          });
        }}
      />
      <div id={idError}>
        <p>{pValue}</p>
      </div>
    </div>
  );
}
