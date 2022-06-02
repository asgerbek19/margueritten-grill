import { useNavigate } from "react-router-dom"
import margueritlogo from '../assets/margueritten.png'
import minigolf from '../assets/mini-golf.jpeg'




export default function Minigolf() {
    const navigate = useNavigate();
    return( 
    
        <div className="frontpage">
        <div className="backarrow" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#DCCA87;">
            <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
            </g>
            </svg>
        </div>
        <img className="frontpagelogo"src={margueritlogo} alt="margueritten Logo"/>
        <h1>Minigolf hos Margueritten </h1>
    <p className="txt">Hos Margueritten kan vi prale med at eje Danmarks største dobbelt loop og bro! 

Vores minigolfbane består af 18 huller, hvor både børn og voksne kan dyste mod hinanden. 

Foretrækker du derimod at være tilskuer, kan dette nemt ske fra vores grillbar eller hytte, som er placeret ved banen.  

</p>
<p className="txt">Du kan også tage vennerne under armen og prøve vores Ceres Tour, som er for alle over 18 år. Her er reglerne lavet om - du får nemlig en øl med i hånden, som drikkes undervejs i spillet. </p>

<p>Pris
Voksen 40,-
Børn til og med 12 år 30,- </p>

<p>Ceres tour pr. person
1 øl 60,-
2 øl 80,-
3 øl 100,- </p>
    

<img className="minigolf"src={minigolf} alt="margueritten minigolf"/>
    </div>
    
    
    )
    }

 