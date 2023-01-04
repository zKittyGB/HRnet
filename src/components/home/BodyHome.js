import "../../css/home/BodyHome.css"
import logoCreateEmployee from "../../assets/logo_create_employee.png"
import DatePicker from "../home/DatePickerHome"

export default function BodyHome() {
  return (
    <div className="home_body">
      <div className="home_body_sectionPicture">
        <img src={logoCreateEmployee} className="logoCreateEmployee" alt="create_employee"/>
        <h2>Create Employee</h2>
      </div>
      <div className="home_body_sectionForm">
        <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        
        <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker/>

                <label htmlFor="start-date">Start Date</label>
                <DatePicker/>
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <button className="save">Save</button>
        </form>
      </div>
    </div>
  );
};
