import "./styles/App.css";
import Auth from "./components/pages/Auth";
import Home from "./components/pages/Home";
import Network from "./components/pages/Network";
import Notifications from "./components/pages/Notifications";
import Profile from "./components/pages/Profile";
import Jobs from "./components/pages/Jobs";
import NavBar from "./components/utilities/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/home" element={<Home />} />
                <Route path="/network" element={<Network />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
