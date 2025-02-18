import React, { useState } from 'react'

const LikeButton = () => {

  const [liked, setLiked] = useState(false)

  return (
    <div>
      <button 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200'
      onClick={() => setLiked (!liked)} > 
      {liked ? 'Unlike' : 'Like'} 
      </button>
    </div>
  )
}

export default LikeButton