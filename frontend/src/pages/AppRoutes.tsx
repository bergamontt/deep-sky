import {Route, Routes} from "react-router-dom";
import WelcomePage from './WelcomePage';
import ImagePage from './ImagePage';
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function AppRoutes() {
    return(
        <Routes>
            <Route index element={<WelcomePage />}/>
            <Route path="images" element={<ImagePage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<SignupPage />}/>
        </Routes>
    );
}

export default AppRoutes