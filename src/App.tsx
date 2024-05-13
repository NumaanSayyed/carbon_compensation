import Homepage from "./Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Programs from "./components/Programs"
import SelectedProgram from "./components/SelectedProgram"
import Login from "./Authentication/Login"
import Registration from "./Authentication/Registration";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return(
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/selected" element={<SelectedProgram />} />
            
          </Routes>
      <Footer />

        </BrowserRouter>
      </>
    )
}

export default App
