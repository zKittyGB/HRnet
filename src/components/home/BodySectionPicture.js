import React from "react";
import logoCreateEmployee from "../../assets/logo_create_employee.png";

export default function HomeBodySectionPicture() {
  return (
    <div className="home_body_sectionPicture">
      <img
        src={logoCreateEmployee}
        className="logoCreateEmployee"
        alt="create_employee"
      />
      <h2>Create Employee</h2>
    </div>
  );
}
