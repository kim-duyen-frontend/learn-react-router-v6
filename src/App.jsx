import { Outlet } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Login/>
      <Outlet/>
    </>
  )
}

export default App
