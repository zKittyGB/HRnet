import "../../css/home/BodyHome.css";
import BodyHomeSectionForm from "./BodyHomeSectionForm";
import BodySectionPicture from "./BodySectionPicture";

export default function BodyHome() {
  return (
    <div className="home_body">
      <BodySectionPicture />
      <BodyHomeSectionForm />
    </div>
  );
}
