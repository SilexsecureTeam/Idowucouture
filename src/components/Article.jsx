import React from 'react'

const Article = () => {
  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-8">
        <div className="flex justify-between mb-4">
      <h1 className='poppins'>Latest Articles</h1>
      <a
              href='#'
              className="text-base text-[#121212] font-medium flex items-center gap-1 underline"
            >
              View More <span>→</span>
            </a>
      </div>
      <div className="flex "></div>
    </div>
  )
}

export default Article
