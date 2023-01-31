import "../../css/home/BodyHome.css";
import "../../css/home/ModalFormValidate.css";
import BodyHomeSectionForm from "./bodySectionForm/BodyHomeSectionForm.js";
import BodySectionPicture from "./bodySectionPicture/BodySectionPicture";
import { ModalFormValidate } from "modale_form_validate_component";
import { useSelector, useDispatch } from "react-redux";

export default function BodyHome() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const birth = useSelector((state) => state.birth);
  const dateStart = useSelector((state) => state.dateStart);
  const street = useSelector((state) => state.street);
  const city = useSelector((state) => state.city);
  const zipCode = useSelector((state) => state.zipCode);
  const department = useSelector((state) => state.department);
  const isModalClose = useSelector((state) => state.formValidate);

  function closeModal() {
    dispatch({ type: "setCloseModal" });
  }

  const children = (
    <div className="modal-formValidate">
      <div className="modal-formValidate-sectionLogo"></div>
      <div className="modal-formValidate-sectionText">
        <h1>Employee has been created in your tablebase</h1>
        <h2>Disclosure summary :</h2>
        <div className="modal-formValidate-sectionText-summary">
          <div className="modal-formValidate-sectionText-summary-elementLeft">
            <p>Firstname : {firstName}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementRight">
            <p>Lastname : {lastName}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementLeft">
            <p>Birth : {birth}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementRight">
            <p>Date Start : {dateStart}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementLeft">
            <p>Street : {street}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementRight">
            <p>City : {city}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementLeft">
            <p>Zip Code : {zipCode}</p>
          </div>
          <div className="modal-formValidate-sectionText-summary-elementRight">
            <p>Department : {department}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home_body">
      <BodySectionPicture />
      <BodyHomeSectionForm />
      <ModalFormValidate
        isModalClose={isModalClose}
        closeModal={closeModal}
        children={children}
      />
    </div>
  );
}
