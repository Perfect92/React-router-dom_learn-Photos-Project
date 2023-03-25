
import React,{useEffect,useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'


export default function PostsPage() {

  const [posts , setPosts]  = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos") 
   .then(pesponse => pesponse.json())
   .then(data => setPosts(data))
  },[])


  return (
    <div>
      <h2 className='title'>Posts Page</h2>
      <ul>
      {posts.slice(0,10).map((post) => (
        <li>
          <Link to={`/posts/${post.id}`}>
          <h3>
            {console.log(post)}
            Name-Photo: {post.title}
          </h3>
          </Link>
          <p>---------------------------------------------------------------------------------------------------</p>
          </li>))}
      </ul>
    </div>
  )
}
