import MenuTop from "../components/menu/MenuTop"
import BodyHome from "../components/home/BodyHome"
import Footer from "../components/footer/Footer"
import "../css/Home.css"

export default function Home() {
  return (
    <div>
        <MenuTop/>
        <BodyHome/>
        <Footer/>
    </div>
  );
}
