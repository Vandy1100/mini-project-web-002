import React from 'react'
import Link from 'next/link'


export default function Product({title,image,price,id,description}) {
  return (
    <>    
<div class="mx-auto mt-11 w-80 transform overflow-hidden h-80 rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-1/2 w-full object-cover object-center" src={image} alt={title} />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900 line-clamp-1">{title}</h2>
    <div className='mx-5'>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700 line-clamp-2">{ description}</p>
    </div>
    <div class="flex items-center absolute bottom-2  w-72">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">${price}</p>
      <Link href={`product/${id}`} class=" self-end ml-auto text-base rounded-md bg-blue-600 p-2 font-medium text-yellow-50">View Detail</Link>
    </div>
  </div>
</div>


    </>
  )
}
