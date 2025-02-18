import React from 'react'

const UserCard = ({ nombre, edad, profesion }) => {
  return (
    <div className='user-card flex flex-col justify-between mt-5 w-52 inset-shadow-zinc-950 shadow-2xl bg-fuchsia-50 border border-black text-light p-4 text-xs tracking-wider leading-relaxed'>
        <h2> <strong>Nombre: </strong>{nombre}</h2>
        <p> <strong>Edad: </strong>{edad}</p>
        <p><strong>Profesión: </strong>{profesion}</p>
    </div>
  )
}

export default UserCard