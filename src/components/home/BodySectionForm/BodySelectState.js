import React from "react";
import { useDispatch } from "react-redux";
import { statesList } from "../../../utils/states.js";
import Select from "react-select";

export default function SelectState() {
  const dispatch = useDispatch();

  const options = [
    { value: "", label: "", isdisabled: true },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human-Resources" },
    { value: "Legal", label: "Legal" },
  ];

  return (
    <div className="stateArea">
      <label htmlFor="state">State</label>
      <Select
        name="state"
        id="state"
        value={statesList.value}
        options={statesList}
        defaultValue={statesList[0]}
        isOptionDisabled={(option) => option.isdisabled} // disable an option
        onChange={(event) => {
          dispatch({
            type: "setState",
            payload: { option: event.name },
          });
        }}
      />

      <div id="state-error">
        <p>Select a state</p>
      </div>
    </div>
  );
}
