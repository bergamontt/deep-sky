import {Route, Routes} from "react-router-dom"
import WelcomePage from "./WelcomePage";

function AppRoutes() {
    return(
        <Routes>
            <Route index element={<WelcomePage />}/>
        </Routes>
    );
}

export default AppRoutes