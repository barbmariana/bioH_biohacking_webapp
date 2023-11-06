import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const RoutesComponent = () => {
        return(
                <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Login/>} />
                </Routes>

                </BrowserRouter>
        )
}
export default RoutesComponent;