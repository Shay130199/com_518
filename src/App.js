import "./App.css";
import React from "react";
import "./pages/Title.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import POIPage from "./pages/POIPage";
import Login from "./pages/Login";


//--------------FRONTEND--------------//

//------(Q4)------SearchALL (SEARCH ALL REGIONS) Component-------------//

//------(Q5)------/Page2  (ADD NEW POI) Component -------------//

//------(Q6)------ON SearchAll  (add recommend button) Component -------------//

function App() {
  
  return (
    <div>
      <br />
      <Router>
        <Routes>
          <Route path="/"element={<Login/>} />
          <Route path="/poipage" element={<POIPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

//------(Q9 Login system)-------------//


export default App;
