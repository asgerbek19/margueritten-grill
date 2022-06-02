import { Link } from "react-router-dom"
import margueritlogo from '../assets/margueritten.png'
import margueritbil from '../assets/margueritten-grill.jpeg'

export default function HomeLogin() {
    return( 
    <div className="frontpage">
        <img className="frontpagelogo"src={margueritlogo} alt="margueritten Logo"/>
        <h1>Velkommen til Marguerit-familien</h1>
        <p>Som medlem kan du opnå en masse fordele hver gang, du besøger vores cafe.</p>
        <p>Når du bestiller hos Margueritten kan du optjene point til rabat på alt mad og drikke.</p>
        <p>Det samme gælder, hvis du deltager i vores konkurrencer eller spiller minigolf. </p>


        <img className="marguerittenbil"src={margueritbil} alt="margueritten billede"/>

        <div className="btn1-flex">
    <Link to="https://xn--kbmad-vua.dk/menu-og-aabningstider/" className="btn1">Se Menukort</Link>
    <Link to="/" className="btn1">Mine point</Link> 
    <button src="https://login.onlinepos.dk/taw_v3/11537/?page=kategorier" className="btn1">Bestil online</button>   
    </div>
    
    </div>



    )}
