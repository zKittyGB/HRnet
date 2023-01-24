import "../../css/home/BodyHome.css";
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
  const state = useSelector((state) => state.state);
  const zipCode = useSelector((state) => state.zipCode);
  const department = useSelector((state) => state.department);
  const isModalOpen = useSelector((state) => state.formValidate);
  const modalData = {
    firstName: firstName,
    lastName: lastName,
    birth: birth,
    dateStart: dateStart,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  };
  function closeModal() {
    dispatch({ type: "setCloseModal" });
  }
  return (
    <div className="home_body">
      <BodySectionPicture />
      <BodyHomeSectionForm />
      <ModalFormValidate
        isModalOpen={isModalOpen}
        userinfo={modalData}
        closeModal={closeModal}
      />
    </div>
  );
}
