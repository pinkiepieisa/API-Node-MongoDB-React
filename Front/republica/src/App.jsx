import { Route, Routes } from "react-router-dom";
import AlunaCad from "./pages/Aluna/AlunaCad";
import Dormitorio from "./pages/Dormitorio/DormitorioCad";
import Home from "./pages/Home";
import ListaAluna from "./pages/Aluna/ListaAluna";
import ListaDormitorio from "./pages/Dormitorio/ListaDormitorio";

function App()  {

    return (

        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aluna" element={<AlunaCad />}></Route>
            <Route path="/dormitorio" element={<Dormitorio />}></Route>
            <Route path="/listaalunas" element={<ListaAluna />}></Route>
            <Route path="/listadormitorios" element={<ListaDormitorio />}></Route>

        </Routes>

    )

}

export default App;