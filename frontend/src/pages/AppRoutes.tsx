import {Route, Routes} from "react-router-dom";
import WelcomePage from './WelcomePage';
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ImagesPage from "./ImagesPage";

function AppRoutes() {
    return(
        <Routes>
            <Route index element={<WelcomePage />}/>
            <Route path="images" element={<ImagesPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<SignupPage />}/>
        </Routes>
    );
}

export default AppRoutes