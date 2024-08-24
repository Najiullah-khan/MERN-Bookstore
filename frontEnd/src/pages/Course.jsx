import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react'

function Course() {
    const navigate = useNavigate();
    const [book,setbook]=useState([]);
    useEffect(()=>{
      const getBook=async()=>{
           
      
      try {
        const res=await axios.get("http://localhost:4001/book");
           console.log(res.data)
           setbook(res.data);
        
        
      } catch (error) {
        console.log(error)
      }
    }
      getBook();
    },[]);
  return (
   <>
   <Navbar/>
   <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-8">

   <div className='space-y-8 items-center justify-center text-center '>
   <h1 className="text-2xl  md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
            
            <button className="btn btn-secondary " onClick={() => navigate('/')}>Back</button>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Card  key={item.id} data={item} />
          ))}
        </div>
          </div>
          

   </div>

   <Footer/>
   </>
  )
}

export default Course
