import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/createPost">Create Post</Link>
        <Link to="/posts">All Posts</Link>
    </div>
  )
}

export default NavBar