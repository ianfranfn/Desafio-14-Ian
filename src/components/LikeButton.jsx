import React, { useState } from 'react'

const LikeButton = () => {

  const [liked, setLiked] = useState(false)

  return (
    <div>
      <button 
      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-5 inset-shadow-zinc-950 shadow-xl rounded transition-colors duration-200'
      onClick={() => setLiked (!liked)} > 
      {liked ? 'Unlike' : 'Like'} 
      </button>
    </div>
  )
}

export default LikeButton