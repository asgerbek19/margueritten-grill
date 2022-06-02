import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth,signOut } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { faBurger, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";





export default function Navbar() {
    const auth = getAuth();
    const navigate = useNavigate();
    function handleSignOut(){
            signOut(auth);
        navigate("/log-ind");
    }

    return (
            <nav className="navbar">
                    <NavLink to="/">Home</NavLink>

                    <NavLink  to="/minigolf"> <FontAwesomeIcon icon={faBurger}  /></NavLink>

                    <NavLink to="/om-os"> <FontAwesomeIcon icon="fa-regular fa-face-smile" /> Om os</NavLink>
                

                    <div onClick={handleSignOut}><FontAwesomeIcon icon={faArrowRightFromBracket} /></div> 
                    
            </nav>
    );
} 