import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const About = () => {
  return (
    <div className='container' style={{marginTop:"150px"}}>
        <div className="d-flex justify-content-between w-100">
        <h1 className='text-white'>About Us</h1>
        <Link to="/posts"><button className='btn bg-white'>View Blog Posts</button></Link>
        </div>
        <div className='d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center'>
            <img src="https://i.postimg.cc/KcgCw63j/jaconda-1.gif" alt='illustration' className='img-fluid' />
            <div>
            <p className='text-white ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem adipisci excepturi ad deleniti harum iusto, vero fuga tempore magni, voluptate tenetur expedita aliquid autem quod commodi possimus molestias earum animi voluptas vitae doloribus! Ab nulla quo officia error possimus, culpa ullam consequatur modi, consequuntur accusamus reprehenderit, deserunt esse explicabo!</p>
            <p><Link to="/" className='text-white'>Back To Homepage</Link></p>
            </div>
        </div>
        
    </div>
  )
}

export default About