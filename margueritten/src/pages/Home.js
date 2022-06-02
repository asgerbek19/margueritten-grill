import { Link } from "react-router-dom"
import margueritlogo from '../assets/margueritten.png'
import spoon from '../assets/spoon.png'





export default function Home(){
    function handleMenu(){
       const url="https://login.onlinepos.dk/taw_v3/11537/?page=kategorier"
        window.open(url)

    }
  
        return(
          
            <div className="frontpage">
    <img className="frontpagelogo"src={margueritlogo} alt="margueritten Logo"/>
    <div className="txtspoon">
    <h1>Velkommen til Margueritten Grill/Cafe </h1>
    <p className="txt">Klassisk dansk mad som du kender det</p>
    <img className="spoon"src={spoon} alt="spoon Logo"/>
    </div>

    
    

   

    
    <div className="btn-flex">
    <h3>Blev medlem af marguerit-familien</h3>
    <Link to="/opret-bruger" className="btn">Opret bruger</Link>
    <Link to="/login" className="btn">Log ind</Link>
    </div>
    
    <div className="btn1-flex">
    <button onClick={handleMenu} className="btn">Se menukort</button>
    <Link to="/" className="btn">Log ind</Link>
      
    </div>
    </div>
        )
    }

