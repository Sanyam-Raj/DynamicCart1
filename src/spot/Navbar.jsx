import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-3 py-1 flex items-center justify-between'>
        <h1>Orange</h1>
        <div className='px-5 py-2 bg-orange-500 rounded flex gap-2' >
            <h3>FavOne</h3>
            <h3>{data.filter(item => item.status).length}</h3>
        </div>

    </div> 
  )
}

export default Navbar