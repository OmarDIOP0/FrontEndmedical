import { useState } from "react";

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return ( 
        <div className="container">
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="email" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
             </div>
             <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="......" required 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
             </div>
             <button type="submit" className="grid m-3 bg-red-500 p-4 rounded">Valider</button>
        </form>
        </div>
     );
}
 
export default Login;