import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="mt-5 row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Kode Camps Blog Site For Tech Creatives.</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white mb-5">Share Ideas and inspiration</p>
                        <Link className="btn bg-white btn-xl shadow" to="/posts">View Blog posts</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home