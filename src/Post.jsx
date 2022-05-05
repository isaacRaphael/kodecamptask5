import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

  return (
    <article className='post mt-2'>
        <Link to={`/post/${post.id}`}>
            <h2 style={{color:"white", display: "inline"}}>{post.title}</h2><span className='ms-2 text-white'>(Click to view)</span> 
            <p style={{color:"white"}} className='postDate'>{post.datetime}</p>
        </Link>
        <p className='postBody'>
            {post.body.length <= 25 ? post.body : post.body.slice(0, 25)+"..."}
        </p>
    </article>
  )
}

export default Post