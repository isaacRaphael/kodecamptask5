import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 text-white shadow" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">KODE-CAMP BLOG</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">   
                        <li className="nav-item"><Link className="nav-link text-dark mx-2" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark mx-2" to="/posts">Blog Posts</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark mx-2" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark mx-2" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header