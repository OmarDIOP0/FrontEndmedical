import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="container">
            <h3>Oupsss....</h3>
            <p>La page est introuvable</p>
            <Link to={'/home'} className='text-red-500'>Allez a la page d'accueil</Link>
        </div>
     );
}
 
export default NotFound;