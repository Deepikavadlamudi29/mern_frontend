import React, {useContext} from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import{handleLogout} from 'react'
import axios from 'axios'

function Navbar(){
    const user = useContext(userContext)
    const navigate =useNavigate()

    const handleLogout =() => {
        axios.get('https://mernbackend-rc50.onrender.com//logout')
        .then(res =>{
            if(res.data === "Success")
            navigate(0)
        }).catch(err => console.log(err))
    }
    
    
    
    return(
        <div className='navbar-header'>
            <div><h3>Blog App</h3></div>
            <div>
                <Link to ="/" className='link'>Home</Link>
                {
                    user.username ?
                    <Link to ="/Create" className='link'>Create</Link>
                    : <></>

                }
                
                
            </div>
            {
                user.username ?
                
                    <div>
                        <input type = "button" onClick={handleLogout} value ="Logout"/>
                    </div>
                    :
                    <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
                    
            }
                       
                
            </div>
    )
}

export default Navbar
