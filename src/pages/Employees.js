import MenuTop from "../components/menu/MenuTop";
import BodyEmployees from "../components/employees/BodyEmployees";
import Footer from "../components/footer/Footer";

export default function Employees() {
  return (
    <div className="employees_body">
      <MenuTop />
      <BodyEmployees />
      <Footer />
    </div>
  );
}
