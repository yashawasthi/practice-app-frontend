import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();

    const saveData=async(e)=>{
        e.preventDefault();   
        try {
            await axios.post("https://a-five-sandy.vercel.app/savePost",{
                 title,
                 description
            });
            navigate("/posts")
        } catch (error) {
            console.log(error)
        }
     }


  return (
    <div>
        <NavBar />
        <br />
        <form onSubmit={saveData}>
            <input placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title} />
            <input placeholder='Description' onChange={(e)=>setDescription(e.target.value)} value={description} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreatePost