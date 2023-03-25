import React, {useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'

export default function PostInfo() {

    const [post , setPost]  = useState([])
    const {id} = useParams()

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`) 
   .then(pesponse => pesponse.json())
   .then(data => setPost(data))
  },[id])
  return (
    <div className='url'>
      <img src={post?.url} alt="ok"/>
    </div>
  )
}
