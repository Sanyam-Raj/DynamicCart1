import React, { useState } from 'react'

function Card ({data,addtofav,index}) {
    const{image,Artist,status,name}= data


  return (
    <div className='w-60 bg-zinc-300 px-4 py-2 rounded-md flex gap-4 pb-8 relative'>
        <div className='w-24 h-24  rounded-md bg-blue-400' >
             <img className='object-cover w-full h-full' src={image} alt="" />
        </div>
        <div className=''>
            <h3 className='font-semibold leading-none text-l'>{name}</h3>
            <h6 className='text-sm'>{Artist}</h6>
        </div>
        <button onClick={()=>addtofav(index)} className={`absolute px-7 py-2 active:scale-95  cursor-pointer transition transform duration-150 bottom-0 left-1/2 text-white translate-y-[50%] -translate-x-[50%] rounded-full ${status===true?"bg-green-400":" bg-orange-400"}`}>{status===false?"AddInFav":"InFav"}</button>
    </div>
  )
}

export default Card