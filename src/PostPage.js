import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
const PostPage = ({posts, setPosts}) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id)
  const handleDelete = (id) => {
    const filteredPosts = posts.filter(post => post.id !== id);
    setPosts(filteredPosts);
    
    navigate("/posts");
  }
  return (
    <main className='PostPage container' style={{marginTop : "150px"}}>
      <article>
      {post && 
      
        <>
          <h2 className="text-white">{post.title}</h2>
          <p className='postDate text-white'>{post.datetime}</p>
          <p className='postBody text-white'>{post.body}</p>
          <button className="btn bg-danger text-white mt-3" onClick={()=> handleDelete(post.id)}>Delete</button>

        </>
      }
      {
        !post && <>
          <h2>Oops Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit our Homepage</Link>
          </p>
        
        
        </>
      }
      </article>
    </main>
  )
}

export default PostPage