import {Route, Routes} from "react-router-dom"
import WelcomePage from './WelcomePage'
import ImagePage from './ImagePage'

function AppRoutes() {
    return(
        <Routes>
            <Route index element={<WelcomePage />}/>
            <Route path="images" element={<ImagePage />}/>
        </Routes>
    );
}

export default AppRoutes