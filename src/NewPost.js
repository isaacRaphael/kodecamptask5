import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ posts, setPosts }) => {
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const newpost = {
      id : posts.length ? posts[posts.length - 1].id + 1 : 1,
      title : postTitle,
      datetime : new Date().toDateString(),
      body : postBody
    }
    
    setPosts([...posts, newpost])
    navigate("/posts");
    
  }
  return (
    <main className='NewPost container' style={{marginTop: "150px"}}>
      <h2 className="text-white">NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
          <label className="text-white" htmlFor='postTitle'>
            Title:
          </label>
          <input 
          id='postTitle'
          type="text"
          required
          value={postTitle}
          onChange={(e)=> setPostTitle(e.target.value)} />
          <label className="text-white" htmlFor='postBody'>
            Post:
          </label>
          <textarea 
          id="postBody"
          required
          value={postBody}
          onChange={(e)=> setPostBody(e.target.value)} /> 
          <button type='submit'>Submit</button>
      </form>
      </main>
  )
}

export default NewPost