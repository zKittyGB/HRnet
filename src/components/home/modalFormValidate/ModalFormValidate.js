import "../../../css/home/ModalFormValidate.css";
import { useSelector, useDispatch } from "react-redux";
export default function ModalFormValidate(props) {
  const dispatch = useDispatch();
  const formValidate = Object.values(props)[0];
  const data = {
    firstName: "axel",
    lastName: "hébert",
    birth: "29-01-1990",
    dateStart: "29-01-1990",
    street: "13 rue de port ldazdazdazdazddzadazda blannche",
    city: "Sablé",
    state: "alabama",
    zipCode: "16740",
    department: "sales",
  };
  //   const data = Object.values(props)[1];
  if (formValidate === true) {
    return (
      <div className="modal-formValidate">
        <div className="modal-formValidate-sectionLogo"></div>
        <div className="modal-formValidate-sectionText">
          <h1>Employee has been created in your tablebase</h1>
          <h2>Disclosure summary :</h2>
          <div className="modal-formValidate-sectionText-summary">
            <div className="modal-formValidate-sectionText-summary-elementLeft">
              <p>Firstname : {data.firstName}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementRight">
              <p>Lastname : {data.lastName}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementLeft">
              <p>Birth : {data.birth}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementRight">
              <p>Date Start : {data.dateStart}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementLeft">
              <p>Street : {data.street}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementRight">
              <p>City : {data.city}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementLeft">
              <p>Zip Code : {data.zipCode}</p>
            </div>
            <div className="modal-formValidate-sectionText-summary-elementRight">
              <p>Department : {data.department}</p>
            </div>
          </div>
          <button
            className="modal-formValidate-closeButton"
            onClick={(event) => {
              dispatch({ type: "setCloseModal" });
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
