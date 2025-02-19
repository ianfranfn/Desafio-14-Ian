import React from 'react'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'
import Producto from './components/Producto'
import Contador from './components/Contador'

const App = () => {
  return (
    <div className='container flex flex-row justify-around'>
      <UserCard
        nombre='Juanito'
        edad={25}
        profesion='Programador'
        />

        <LikeButton />

        <Producto 
        nombre= 'Laptop'
        descripcion= 'Laptop de 16 GB de RAM'
        />

        <Contador limite={10} />
    </div>
  )
}

export default App