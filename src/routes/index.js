import { useState } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/Home";
import Manually from "../components/Manually";
import Automatically from "../components/Automatically"
import SideBar from "../components/SideBar";



let MainRouter = () => {
    const [buttonData, setButtonData] = useState([]);
    
    function buttonClick(data) {
        setButtonData(() => {
            return [data];
          });
    }
    
    
    return (
        <Router>
            <div>
                <SideBar buttonDataName={buttonData}/>
            </div>
            <Routes>
                <Route exact path="/" element={<Home onButton={buttonClick} />} />
                <Route exact path="/manually" element={<Manually />} />
                <Route exact path="/automatically" element={<Automatically />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;