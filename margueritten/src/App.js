import "./css/style.css";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Minigolf from './pages/Minigolf';
import HomeLogin from './pages/HomeLogin';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';





function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
 
  onAuthStateChanged(auth, (user) => {
     if (user) {
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
     } else {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
     }
  });
  
 // variable holding all private routes including the nav bar
 const privateRoutes = (
  <div >
 
<Routes>
<Route path="/" element={<HomeLogin />} />
<Route path="/om-os" element={<AboutUs />} />
<Route path="/minigolf" element={<Minigolf/>}/>
<Route path="*" element={<Navigate to="/" />} />
</Routes>
<Navbar/>
 
       
       </div>
    );

    // variable holding all public routes without nav bar
   const publicRoutes = (
    <>
    
       <Routes>
          
          <Route path="/opret-bruger" element={<SignUp />} />
          <Route path="/om-os" element={<Minigolf />}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        
       </Routes>
    </>
 );
 return <main>{ isAuth ? privateRoutes : publicRoutes}</main>;


}




export default App;