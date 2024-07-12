import { HashRouter, Routes, Route } from "react-router-dom";
import Apod from "./pages/Apod";
import ImgSearch from "./pages/ImgSearch";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import ImgDetail from "./pages/ImgDetail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Sucess from "./pages/Sucess";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <HashRouter basename={"/"}>
            <Navbar title={"Space Exploration"} aboutText={"About Us"} aboutLink={"/about"} />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/apod" element={<Apod />} />
                <Route path="/search" element={<ImgSearch />} />
                <Route path="/image/:id" element={<ImgDetail />} />
                <Route path="/success" element={<Sucess />} />
                {/* Handle 404 - Not Found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
