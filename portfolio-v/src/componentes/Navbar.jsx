
import { Link } from "react-router-dom"
import myVector from '../assets-icon/myVector.png';




function NavBar () {
    return (
    <div className="center">
     <h1 className="NameLogo"> Valmont <img className="myVector" src={myVector}alt="vector del titul"/>  </h1>
    <nav>
    <div className="transformList">
        <ul className="views">
          
            <li className="listViews" >
                
                <Link className="navPrincipal" to ='/'>Home</Link>
            </li>
            <li className="listViews">
                <Link className="navPrincipal"to ='/About me'> About me </Link>
            </li>
            <li className="listViews">
                <Link className="navPrincipal " to ='/Projects'> Projects </Link>
            </li>
            <li className="listViews">
                <Link className="navPrincipal" to ='/Contact'> Contact </Link>
            </li>
           
        </ul>
     </div>  
    </nav>

  </div>
  
   )
}  





export {NavBar};