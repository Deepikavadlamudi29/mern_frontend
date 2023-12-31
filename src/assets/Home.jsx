import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
    const[posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://mernbackend-rc50.onrender.com/getposts`)
        .then(posts => {
          setPosts(posts.data)
        })
        .catch(err => console.log(err))
    }, [])
        

  return (
    <div className='post_container'>
      {
          posts.map(post => (
            <Link to={`/post/${post._id}`}className='post' key={post._id}>
            
            <img src={`https://mernbackend-rc50.onrender.com/Images/${post.file}`} alt=""/>

              <div className = 'post_text'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            
            </div>
            </Link>
          ))
        }
        </div>
  );
}
  


export default Home;
