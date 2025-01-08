import { useState } from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    const [visible, setVisible]= useState(false)
  return (
    <div className="  flex items-center justify-between py-8 ">
  <img src={'logo.svg'} alt="" className='w-36'/>


      <ul className=" hidden  sm:flex items-center gap-5 ">
        <Link className='text-sm font-medium ' to='/'>
          <p className='hover:text-[#b45721]'>HOME</p>
        </Link>
        <Link className='text-sm font-medium ' to='/categories'>
          <p className='hover:text-[#b45721]'>OUR PRODUCTS</p>
        </Link>
        <Link className='text-sm font-medium ' to='/orders'>
          <p className='hover:text-[#b45721]'>ORDER</p>
        </Link>

        <Link className='text-sm font-medium ' to='/details' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'> PRODUCTS DETAILS</p>
        </Link>
        
        <Link className='text-sm font-medium ' to='/contact'>
          <p className='hover:text-[rgb(180,87,33)]'>CONTACT US</p>
        </Link>
      </ul>
      <img src={'menubar.svg'} alt=""  className='w-5 sm:hidden  ' onClick={()=>setVisible(true)} />

      <div className={`absolute right-0 bottom-0 top-0 bg-[#FEFEFE] overflow-hidden transition-all ${visible?'w-full' :'w-0'}`}>
      <div className='flex flex-col gap-4 px-4 py-2 '>
     <div className='flex items-center gap-4' onClick={()=>setVisible(false)}>
        <img src= {'xicon.svg'} alt="" className='w-5 ' />
        <p className='text-xl font-medium text-gray-700 hover:text-[rgb(180,87,33)]'>Back</p>
     </div>
     <div className='flex flex-col gap-2 text-gray-700'>
     <Link className='text-sm font-medium ' to='/' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'>HOME</p>
        </Link>
        <Link className='text-sm font-medium ' to='/categories' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'>OUR PRODUCTS</p>
        </Link>
        <Link className='text-sm font-medium ' to='/orders' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'>ORDER</p>
        </Link>

        <Link className='text-sm font-medium ' to='/details' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'> PRODUCTS DETAILS</p>
        </Link>
        <Link className='text-sm font-medium ' to='/contact' onClick={()=>setVisible(false)}>
          <p className='hover:text-[rgb(180,87,33)]'>CONTACT US</p>
        </Link>

     </div>
     
      </div>

      </div>
     
    </div>
  )
}

export default Nav