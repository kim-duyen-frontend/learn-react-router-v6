import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import PrivateRouter from './components/PrivateRouter';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route element={<PrivateRouter />}>
          <Route />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default App
