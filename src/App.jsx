import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ByCategoryPage from "./pages/ByCategoryPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {

    let {postID} = useParams();
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
                    <Route path="/details/:postID" element={<DetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;