import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Post from './Post';
import axios from 'axios';

const AllPosts = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{

        (async function getData()
        {
            const response= await axios.get("https://practice-app-backend.vercel.app/posts").then((res)=>res.data);
            console.log(response.data)
            setData(response.data);
        })();

    },[]);

  return (
    <div>
    <NavBar />
    <br />
    <div>
    {data.length!=0 ? (data.map((post,index)=>{
        return <Post key={index} title={post.title} description={post.description} />
    }))
        :
        <div>No Posts</div>}
    </div>
    

    </div>
  )
}

export default AllPosts