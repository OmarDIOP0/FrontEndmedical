import { Link } from "react-router-dom";

const Layout = () => {
    return ( 
        <div className="container">
            <ul class="flex bg-red-200 p-3 ">
          <li class="mr-12">
               <Link to={'/home'} class="text-blue-500 hover:text-blue-800" >Home</Link>
          </li>
          <li class="mr-12">
               <Link to={'/dashboard'} class="text-blue-500 hover:text-blue-800" >Dashboard</Link>
          </li>
          <li class="mr-12">
              <Link to={'/login'} class="text-blue-500 hover:text-blue-800" >Login</Link>
          </li>
        </ul>
        </div>
     );
}
 
export default Layout;