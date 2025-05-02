// using this exact code make laptop view 3 items phone view 2 items using grid layout and add hover effect on image and name of the category. 
import React from 'react'
import categories from '../data/CategoryProduct'

const Category = () => {
  return (
    <div className='px-5 sm:px-10 lg:px-20 py-8'>
      <h1 className='text-center text-2xl md:text-[40px] text-[#23262f] font-medium poppins mb-6 md:mb-10'>Shop by Categories</h1>
       <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 sm:gap-10 lg:gap-12">
        {categories.map((category) => (
            <div key={category.id} className=' gap-4 items-center '>
                <img src={category.image} alt={category.name} className=' h-[150px] md:h-[250px] w-full object-fill mb-4' />
                <h2 className='text-lg text-center poppins font-medium'>{category.name}</h2>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Category
