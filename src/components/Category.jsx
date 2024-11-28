import Data from '@/Shared/Data'
import React from 'react'

const Category = () => {
  return (
    <div className='mt-40'>
        <h2 className='font-bold text-3xl text-center mb-6'>Brose By Type</h2>

        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category, idx) => (
                <div className='border rounded-md p-3 flex flex-col items-center hover:shadow-lg cursor-pointer'>
                    <img src={category.icon} height={40}
                    width={40} />
                    <h2 className='mt-2'>{category.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category