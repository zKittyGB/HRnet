import logoCreateEmployee from "../../assets/logo_create_employee.png"
import logoEmployees from "../../assets/logo_employees.png"
import {Link} from 'react-router-dom'
import "../../css/menu/MenuTop.css"
export default function MenuTop() {
  return (
    <div className="home_menuTop">
        <Link to ="/"><h1>HRnet</h1></Link>
        <div className="home_menuTop_linkArea">
            <Link to ="/">
                <div className="home_menuTop_linkArea_createEmployee">
                    <img src={logoCreateEmployee} alt="create_employee"/>
                    <p>Create employee</p>
                </div>
            </Link>
            <Link to ="/employees">
                <div className="home_menuTop_linkArea_employees">
                    <img src={logoEmployees} alt="employees"/>
                    <p>Current Employees</p>
                </div>
            </Link>
        </div>
    </div>
  );
}
