import React, { useState } from "react";
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
          firstName={"First Name"}
          inputId={"first-name"}
          setFirstName={"setFirstName"}
          error={firstNameValidate}
        />
        {/*last name input */}
        <ValidationTextFields
          lastName={"Last Name"}
          inputId={"last-name"}
          setFirstName={"setLastName"}
          error={lastNameValidate}
        />
        {/*BirthDay input */}
        <DatePicker
          birth={"Birth"}
          id={"date-of-birth"}
          title={"Date of birth"}
          error={"date-of-birth-error"}
          p={"Pick a birth date"}
        />
        {/*StartDate input */}
        <DatePicker
          birth={"DateStart"}
          id={"date-of-birth"}
          title={"Start Date"}
          error={"start-date-error"}
          p={"Pick a Start date"}
        />

        <fieldset className="address">
          <legend>Address</legend>

          {/*Street input */}
          <ValidationTextFields
            lastName={"Street"}
            inputId={"street"}
            setFirstName={"setStreet"}
            error={streetValidate}
          />
          {/*City input */}
          <ValidationTextFields
            lastName={"City"}
            inputId={"city"}
            setFirstName={"setCity"}
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
