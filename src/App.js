import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Employees from "./pages/Employees"

export default function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/employees" element={<Employees/>} />
      </Routes>
    </div>
  );
}
