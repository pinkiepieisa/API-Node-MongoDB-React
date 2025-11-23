import { Route, Routes } from "react-router-dom";
import AlunaCad from "./pages/Aluna/AlunaCad";
import Dormitorio from "./pages/Dormitorio/DormitorioCad";
import Home from "./pages/Home";

function App()  {

    return (

        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aluna" element={<AlunaCad />}></Route>
            <Route path="/dormitorio" element={<Dormitorio />}></Route>


        </Routes>

    )

}

export default App;