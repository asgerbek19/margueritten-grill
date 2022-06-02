import { useNavigate } from "react-router-dom";
import margueritlogo from '../assets/margueritten.png'
import margueritind from '../assets/margueritten-inde.jpeg'

export default function AboutUs() {

    const navigate = useNavigate();
    
   

    return(
        <div className="aboutpage">
            <div className="backarrow" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
                <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#DCCA87;">
                <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
                </g>
                </svg>
            </div>
            <img className="frontpagelogo"src={margueritlogo} alt="margueritten Logo"/>
            <div className="about">
            <h1>Vores historie</h1>
           
            <div className="om-ostxt">
            <p>
            Margueritten fik sit navn tilbage i 1991 da dronning Margrethe II inviede ruten, der er opkaldt efter hendes yndlings blomst. Caféen ligger på margueritruten, som følger landets smukkeste vejrstrækninger. 

Margueritten er et hyggeligt og familievenlig cafe, hvor du kan få et stort udvalg af klassisk danske retter.


            </p>
            <p className="om-ostxt1">
            Du vil få kartofler fra den lokale landmænd, dansk krogmodnet oksekød, kyllingenuggets fra danske gårdkyllinger, hjemmelavet sovs… og ja, så laver vi minimum 3 meter dansk flæskesteg hver dag!

Maden kan du både nyde i vores stemningsfuldte lokaler eller tage det med hjem. 

Hos Margueritten har vi også en storminigolfbane, hvor du kan dyste mod venner og familie.
            </p>
            <img className="marguerittenbil"src={margueritind} alt="margueritten billede"/>
            
            </div>
            
            </div>
            
        </div>
    )
}