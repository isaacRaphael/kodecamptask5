import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Contact from './Contact';
import About from './About';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const db = require("./db.json").posts;
    db.reverse()
    setPosts(db)
  },[])
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts' element={<Posts posts={posts} />}></Route>
          <Route path='/newPost' element={<NewPost posts={posts} setPosts={setPosts} />}></Route>
          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
