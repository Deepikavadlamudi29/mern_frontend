import React, { useEffect, useState ,  useContext} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import { userContext } from '../App'
import {Link} from 'react-router-dom'


function Post() {
    const {id} = useParams()
    const [ post, setPost] = useState({})
    const navigate = useNavigate();
    const user = useContext(userContext)
    useEffect(() =>{
        axios.get(`https://mernbackend-rc50.onrender.com//getpostbyid/`+id)
        .then(result=> setPost(result.data))
        .catch(err => console.log(err));
    },[])
    const handleDelete=(id) => {
        axios.delete(`https://mernbackend-rc50.onrender.com//deletepost/`+id)
        .then(result=> {
           navigate('/')
    })
        .catch(err => console.log(err))
    };
  return (
    <div className='post_container'>
        <div className='post_post'>
        
            
        <img src={`https://mernbackend-rc50.onrender.com//Images/${post.file}`} alt=""/>
            <h1>{post.title}</h1>
            <p> {post.description}</p>
            <div>
                {
                    user.email === post.email ?
                    <> 
                    <Link to = {`/editpost/${post._id}`}>Edit</Link> 
                    
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                    </> : <></>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Post;
