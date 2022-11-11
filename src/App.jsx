import Home from "./components/home/Home";
import Topbar from "./components/topbar/Topbar";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew"
import Technology from "./components/technology/Technology";
import Menu from "./components/menu/Menu";

import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
    <div>
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
