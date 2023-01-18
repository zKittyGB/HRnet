import React from "react";
import { useSelector, useDispatch } from "react-redux";
export let rows;
export default function SaveButton(rows) {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const birth = useSelector((state) => state.birth);
  const dateStart = useSelector((state) => state.dateStart);
  const street = useSelector((state) => state.street);
  const city = useSelector((state) => state.city);
  const state = useSelector((state) => state.state);
  const zipCode = useSelector((state) => state.zipCode);
  const department = useSelector((state) => state.department);
  const dispatch = useDispatch();
  function HandleClick(event) {
    const birthLabel = document.querySelector("#Birth label");
    const birthError = document.getElementById("date-of-birth-error");
    const dateStartLabel = document.querySelector("#DateStart label");
    const dateStartError = document.getElementById("start-date-error");
    const stateLabel = document.querySelector(".stateArea label");
    const stateError = document.getElementById("state-error");
    const zipCodeLabel = document.querySelector(".zipCodeArea label");
    const zipCodeError = document.getElementById("zip-code-error");
    const departmentLabel = document.querySelector(".departmentArea label");
    const departmentError = document.getElementById("department-error");
    event.preventDefault();
    //show error if inputs arn't complete as it requiered
    if (firstName.length <= 3) {
      dispatch({ type: "setFirstNameNoValidate" });
    } else {
      dispatch({ type: "setFirstNameValidate" });
    }
    if (lastName.length <= 3) {
      dispatch({ type: "setLastNameNoValidate" });
    } else {
      dispatch({ type: "setLastNameValidate" });
    }
    if (birth === "") {
      birthError.style.display = "block";
      birthLabel.style.color = "#d32f2f";
    } else {
      birthError.style.display = "none";
      birthLabel.style.color = "#2c3e50";
    }
    if (dateStart === "") {
      dateStartError.style.display = "block";
      dateStartLabel.style.color = "#d32f2f";
    } else {
      dateStartError.style.display = "none";
      dateStartLabel.style.color = "#2c3e50";
    }
    if (street.length <= 3) {
      dispatch({ type: "setStreetNoValidate" });
    } else {
      dispatch({ type: "setStreetValidate" });
    }
    if (city.length <= 3) {
      dispatch({ type: "setCityNoValidate" });
    } else {
      dispatch({ type: "setCityValidate" });
    }
    if (state.length < 3) {
      stateError.style.display = "block";
      stateLabel.style.color = "#d32f2f";
    } else {
      stateError.style.display = "none";
      stateLabel.style.color = "#2c3e50";
    }
    if (zipCode.length < 5) {
      zipCodeError.style.display = "block";
      zipCodeLabel.style.color = "#d32f2f";
    } else {
      zipCodeError.style.display = "none";
      zipCodeLabel.style.color = "#2c3e50";
    }
    if (department === "") {
      departmentError.style.display = "block";
      departmentLabel.style.color = "#d32f2f";
    } else {
      departmentError.style.display = "none";
      departmentLabel.style.color = "#2c3e50";
    }
    //check if all inputs are fill in as it's requiered
    if (
      department !== "" &&
      zipCode.length >= 5 &&
      city.length >= 5 &&
      street.length >= 10 &&
      dateStart !== "" &&
      birth !== "" &&
      lastName.length >= 3 &&
      firstName.length >= 3
    ) {
      console.log("bravo");
      dispatch({
        type: "setFormValidate",
        payload: {
          option: {
            city: city,
            dateOfBirth: birth,
            department: department,
            firstName: firstName,
            lastName: lastName,
            startDate: dateStart,
            state: state,
            street: street,
            zipCode: zipCode,
          },
        },
      });
    } else {
      console.log("raté");
    }
  }
  return (
    <div>
      <button className="save" onClick={HandleClick}>
        Save
      </button>
    </div>
  );
}
