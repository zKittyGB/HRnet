import React from "react";
import ValidationTextFields from "./components/BodyInput.js";
import SaveButton from "./components/SaveButton";
import SelectDepartment from "./components/SelectDepartment";
import SelectState from "./components/BodySelectState";
import DatePicker from "./components/DatePickerHome";
import InputZipCode from "./components/BodyInputZipCode";
import { useSelector } from "react-redux";

export default function HomeBodySectionForm() {
  const firstNameValidate = useSelector((state) => state.firstNameValidate);
  const lastNameValidate = useSelector((state) => state.lastNameValidate);
  const streetValidate = useSelector((state) => state.streetValidate);
  const cityValidate = useSelector((state) => state.cityValidate);

  return (
    <div className="home_body_sectionForm">
      <form action="#" id="create-employee">
        {/*first name input */}
        <ValidationTextFields
          inputLabel={"First Name"}
          inputId={"first-name"}
          setAction={"setFirstName"}
          error={firstNameValidate}
        />
        {/*last name input */}
        <ValidationTextFields
          inputLabel={"Last Name"}
          inputId={"last-name"}
          setAction={"setLastName"}
          error={lastNameValidate}
        />
        {/*BirthDay input */}
        <DatePicker
          classValue={"Birth"}
          id={"date-of-birth"}
          title={"Date of birth"}
          error={"date-of-birth-error"}
          p={"Pick a birth date"}
        />
        {/*StartDate input */}
        <DatePicker
          classValue={"DateStart"}
          id={"date-of-birth"}
          title={"Start Date"}
          error={"start-date-error"}
          p={"Pick a Start date"}
        />

        <fieldset className="address">
          <legend>Address</legend>

          {/*Street input */}
          <ValidationTextFields
            inputLabel={"Street"}
            inputId={"street"}
            setAction={"setStreet"}
            error={streetValidate}
          />
          {/*City input */}
          <ValidationTextFields
            inputLabel={"City"}
            inputId={"city"}
            setAction={"setCity"}
            error={cityValidate}
          />
          <SelectState />
          <InputZipCode />
        </fieldset>
        <SelectDepartment />
        <SaveButton />
      </form>
    </div>
  );
}
