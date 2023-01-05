import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "../../css/home/DatePickerMod.css";
import { useDispatch } from "react-redux";

export default function DatePickerMod(props) {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      //use to separate the birth date picker and the dateStart picker
      className={props.props}
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        dispatch({
          type: `set` + props.props,
          payload: {
            date: date.toString().substring(4, 15).replace(/ /g, "-"),
          },
        });
      }}
    />
  );
}
