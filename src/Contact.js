import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container' style={{marginTop:"150px"}}>
        <div className="d-flex justify-content-between w-100">
        <h1 className='text-white'>Contact Us</h1>
        <Link to="/posts"><button className='btn bg-white'>View Blog Posts</button></Link>
        </div>
        <div className='d-flex flex-column w-100 justify-content-center align-items-center'>
            <img src="https://i.postimg.cc/VvzdCj3b/pablo-technical-support.png" alt='illustration' className='img-fluid' />
            <p><Link to="/" className='text-white'>Back To Homepage</Link></p>
        </div>
        
    </div>
  )
}

export default Contact