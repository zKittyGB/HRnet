import "../../css/home/BodyHome.css";
import logoCreateEmployee from "../../assets/logo_create_employee.png";
import DatePicker from "../home/DatePickerHome";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";

export default function BodyHome() {
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

  //options for department selecter
  const options = [
    { value: "", label: "", isdisabled: true },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human-Resources" },
    { value: "Legal", label: "Legal" },
  ];

  function HandleClick(event) {
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const birthError = document.getElementById("date-of-birth-error");
    const dateStartError = document.getElementById("start-date-error");
    const streetError = document.getElementById("street-error");
    const cityError = document.getElementById("city-error");
    const stateError = document.getElementById("state-error");
    const zipCodeError = document.getElementById("zip-code-error");
    const departmentError = document.getElementById("department-error");
    let inputRequiered = true;
    event.preventDefault();
    //show error if inputs arn't complete as it requiered
    if (firstName.length < 3) {
      firstNameError.style.display = "block";
    } else {
      firstNameError.style.display = "none";
    }
    if (lastName.length < 3) {
      lastNameError.style.display = "block";
    } else {
      lastNameError.style.display = "none";
    }
    if (birth === "") {
      birthError.style.display = "block";
    } else {
      birthError.style.display = "none";
    }
    if (dateStart === "") {
      dateStartError.style.display = "block";
    } else {
      dateStartError.style.display = "none";
    }
    if (street.length < 10) {
      streetError.style.display = "block";
    } else {
      streetError.style.display = "none";
    }
    if (city.length < 3) {
      cityError.style.display = "block";
    } else {
      cityError.style.display = "none";
    }
    if (state.length < 3) {
      stateError.style.display = "block";
    } else {
      stateError.style.display = "none";
    }
    if (zipCode.length < 5) {
      zipCodeError.style.display = "block";
    } else {
      zipCodeError.style.display = "none";
    }
    if (department === "") {
      departmentError.style.display = "block";
    } else {
      departmentError.style.display = "none";
    }
    //check if all inputs are fill in as it's requiered
    if (
      department != "" &&
      zipCode.length >= 5 &&
      city.length >= 5 &&
      street.length >= 10 &&
      dateStart != "" &&
      birth != "" &&
      lastName.length >= 3 &&
      firstName.length >= 3
    ) {
      console.log("bravo");
    } else {
      console.log("raté");
    }
  }

  return (
    <div className="home_body">
      <div className="home_body_sectionPicture">
        <img
          src={logoCreateEmployee}
          className="logoCreateEmployee"
          alt="create_employee"
        />
        <h2>Create Employee</h2>
      </div>
      <div className="home_body_sectionForm">
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <div id="first-name-error">
            <p>Enter at least 3 characters</p>
          </div>
          <input
            type="text"
            id="first-name"
            onKeyUp={(event) => {
              dispatch({ type: "setFirstName" });
            }}
          />

          <label htmlFor="last-name">Last Name</label>
          <div id="last-name-error">
            <p>Enter at least 3 characters</p>
          </div>
          <input
            type="text"
            id="last-name"
            onKeyUp={(event) => {
              dispatch({ type: "setLastName" });
            }}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <div id="date-of-birth-error">
            <p>Select a date of birth</p>
          </div>
          <DatePicker props={"Birth"} />

          <label htmlFor="start-date">Start Date</label>
          <div id="start-date-error">
            <p>Select a start date</p>
          </div>
          <DatePicker props={"DateStart"} />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <div id="street-error">
              <p>Enter at least 10 characters</p>
            </div>
            <input
              id="street"
              type="text"
              onKeyUp={(event) => {
                dispatch({ type: "setStreet" });
              }}
            />

            <label htmlFor="city">City</label>
            <div id="city-error">
              <p>Enter at least 3 characters</p>
            </div>
            <input
              id="city"
              type="text"
              onKeyUp={(event) => {
                dispatch({ type: "setCity" });
              }}
            />

            <label htmlFor="state">State</label>
            <div id="state-error">
              <p>Select a state</p>
            </div>
            <select
              name="state"
              id="state"
              onChange={(event) => {
                dispatch({ type: "setState" });
              }}
            ></select>

            <label htmlFor="zip-code">Zip Code</label>
            <div id="zip-code-error">
              <p>Enter at least 5 characters</p>
            </div>
            <input
              id="zip-code"
              type="number"
              onChange={(event) => {
                dispatch({ type: "setZipCode" });
              }}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <div id="department-error">
            <p>Select a department</p>
          </div>
          <Select
            name="department"
            value={options.value}
            options={options}
            defaultValue={options[0]}
            isOptionDisabled={(option) => option.isdisabled} // disable an option
            id="department"
            onChange={(event) => {
              let payload = event.value.option;
              dispatch({
                type: "setDepartment",
                payload: { option: event.value },
              });
            }}
          />
          <button className="save" onClick={HandleClick}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
