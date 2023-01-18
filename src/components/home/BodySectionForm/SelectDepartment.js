import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

export default function SelectDepartment() {
  const dispatch = useDispatch();
  //options for department selecter
  const options = [
    { value: "", label: "", isdisabled: true },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human-Resources" },
    { value: "Legal", label: "Legal" },
  ];
  return (
    <div className="departmentArea">
      <label htmlFor="department">Department</label>
      <Select
        name="department"
        value={options.value}
        options={options}
        defaultValue={options[0]}
        isOptionDisabled={(option) => option.isdisabled} // disable an option
        id="department"
        onChange={(event) => {
          dispatch({
            type: "setDepartment",
            payload: { option: event.value },
          });
        }}
      />
      <div id="department-error">
        <p>Select a department</p>
      </div>
    </div>
  );
}
