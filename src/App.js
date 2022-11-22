import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { Home } from './pages/Home';

import { useRoutes } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import { HomeLayout } from './Routes/HomeLayout';
import { ProtectedRoute } from './Routes/ProtectedRoutes';
import { AuthProvider } from './context/AuthProvider';


function App() {

  const routes = useRoutes([
    {
      path:"/",
      element: <Home/>
    },{
      path:"/login",
      element:<LoginPage/>
    }
  ])

  //return routes;
  return (
    <AuthProvider userData={false}>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="profile" element={<ProfilePage />} />
      </Route>
     
    </Routes>
    </AuthProvider>

  );
}

export default App;
