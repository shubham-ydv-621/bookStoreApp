import React from 'react'

import list from '../../public/list.json'
import Card from '../../src/components/Cards';
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
<div className='mt-28 item-center justify-center text-center'>

    <h1 className='text-2xl  md:text-4xl'>  we are delighted to have you <span className='text-pink-500'>here :)</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto amet architecto perspiciatis eum neque doloribus, ipsa aspernatur illum quas maiores ullam fugit assumenda voluptate vero facilis sint. Perferendis, labore praesentium.</p>
  <Link to="/">
  <button className='mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>back</button>
  </Link>
</div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Card key={item.id} item = {item}/>
            ))
        }
      </div>

    </div>
    </>
  )
}

export default Course