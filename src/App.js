import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext.js"
import DocLogin from './pages/docLogin/DocLogin'
import EstRegister from './pages/estRegister/EstRegister'
import DocRegister from './pages/docRegister/DocRegister'
import AdminLogIn from './pages/admLogin/AdminLogIn'
import Admin from './pages/admin/Admin'
import './App.css'

function App() {
  const { docente, admin } = useContext(AuthContext);
  
  return (
      <BrowserRouter >
        <Routes>
          {/* <Route exact path="/" element={docente ? <EstRegister /> : <DocLogin />} /> */}
          <Route exact path="/" element={<EstRegister />} />
          <Route path="/register" element={docente ? <Navigate to="/" /> : <DocRegister />} />
          <Route path="/login" element={docente ? <Navigate to='/' /> : <DocLogin />} />
          <Route path="/adminlogin" element={admin ? <Navigate to='/admin' /> : <AdminLogIn />} />
          <Route path="/admin/*" element={admin ? <Admin /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
