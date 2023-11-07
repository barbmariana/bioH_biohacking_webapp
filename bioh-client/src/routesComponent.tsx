import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
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