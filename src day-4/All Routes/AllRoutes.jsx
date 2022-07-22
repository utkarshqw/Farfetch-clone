import { Route, Routes } from "react-router-dom";

import AllComponent from "../Component/AllComponent";
import NewIn from "../Component/NewIn/Newin";

export default function AllRoutest() {
  return (
    
      <Routes>
        <Route path="/new-in" element={<NewIn/>} />
        <Route path="/home" element={<AllComponent />} />
      </Routes>
    
  );
}
