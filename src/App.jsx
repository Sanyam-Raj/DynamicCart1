import React, { useState } from 'react';
import Card from './spot/Card'
import Navbar from './spot/Navbar'

function App() {
  
 const data =[{image:"https://images.unsplash.com/photo-1588032786045-59cefda005c0?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Seven",status:false,Artist:"Sam"},
    {image:"https://images.unsplash.com/photo-1602848596140-33c2b48c6ade?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"lag ja",status:true,Artist:"Sanam"},
    {image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"tum mera",status:false,Artist:"Arjit"},
    {image:"https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"man mera",status:false,Artist:"KK"}]

 const[songData,setSongData]= useState(data)
 const addtofav =(index)=>{
  setSongData((prev)=>{
    return prev.map((item,curindex)=>{
      if(index===curindex) return {...item,status:!item.status}
      return item
    })
  })

 }
  return (
    <div>
     <Navbar data={songData} />
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {songData.map((obj,index)=>(
        <Card data={obj} addtofav={addtofav} index={index} key={index} />
      ))}
      </div>
    </div>
  ) 
}

export default App