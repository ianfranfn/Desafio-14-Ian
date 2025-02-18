import React from 'react'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'

const App = () => {
  return (
    <div className='container flex flex-row justify-center'>
      <UserCard
        nombre='Juanito'
        edad={25}
        profesion='Programador'
        />

        <LikeButton />
    </div>
  )
}

export default App