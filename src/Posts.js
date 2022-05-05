import React from 'react'
import Feed from './Feed'
import { Link } from 'react-router-dom'

const Posts = ({ posts }) => {
  return (
    
    <main className='container text-white' style={{marginTop:"100px"}}>
        <div className='w-100 d-flex justify-content-end'>
            <Link to="/newPost"><button className='btn bg-white shadow'>Add New</button></Link>
        </div>
      {posts.length ? 
      <Feed posts={posts}/> :
      <p> No posts to Display</p>}
    </main>
  )
}

export default Posts