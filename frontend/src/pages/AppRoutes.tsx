import {Route, Routes} from "react-router-dom";
import WelcomePage from './WelcomePage';
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ImagesPage from "./ImagesPage";
import ImagePage from "./ImagePage";

function AppRoutes() {
    return(
        <Routes>
            <Route index element={<WelcomePage />}/>
            <Route path="image" element={<ImagesPage />}/>
            <Route path="image/:id" element={<ImagePage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signup" element={<SignupPage />}/>
        </Routes>
    );
}

export default AppRoutes