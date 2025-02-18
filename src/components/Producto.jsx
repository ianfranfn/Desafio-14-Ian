import React, { useState } from 'react'

const Producto = ({ nombre, descripcion }) => {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='bg-gray-200 p-4 mt-5 inset-shadow-zinc-950 shadow-xl rounded'>
      <h1 className='text-3xl font-bold'>{nombre}</h1>
      {isVisible &&  <p>{descripcion}</p>}
      <button className='bg-green-500 hover:bg-green-700 text-amber-50 p-0.5 mt-3 font-bold rounded' onClick={() => setIsVisible (!isVisible)}
        >
        {isVisible ? 'Ver menos' : 'Ver más'}
        </button>
    </div>
  )
}

export default Producto