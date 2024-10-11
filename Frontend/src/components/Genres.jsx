import React from 'react'

const Genres = () => {
  return (
    <div className="genres-section py-8">
  <h2 className="text-3xl font-bold mb-6 text-center">Browse by Genre</h2>
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
    <div className="genre-box bg-purple-300 text-white p-12 rounded-md cursor-pointer w-2/5  md:w-1/4 text-center">
      Pop
    </div>
    <div className="genre-box bg-green-300 text-white p-12 rounded-md cursor-pointer w-2/5 md:w-1/4 text-center">
      Classical
    </div>
    <div className="genre-box bg-blue-300 text-white p-12 rounded-md cursor-pointer w-2/5  md:w-1/4 text-center">
      Rock
    </div>
  </div>
</div>

  
  )
}

export default Genres
