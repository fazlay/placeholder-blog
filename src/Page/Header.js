import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Header = () => {
    const {newUser }= useAuth()
    return (
        <div className="bg-green-300 py-2 mb-0  text-right px-4 font-bold">
               <Link className="py-2 px-3 hover:bg-green-100"  to="/">ALL POST</Link> 
       {!newUser.email?      <Link className="py-2 px-3  hover:bg-green-100" to="/signin">SIGNIN</Link> :
            <Link className=" py-2 px-3 hover:bg-green-100"  to="/signout">SIGNOUT</Link> }
         
            
        </div>
    )
}

export default Header
