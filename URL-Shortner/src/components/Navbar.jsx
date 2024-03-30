import '../App.css'
import { useState } from 'react';
import axios from 'axios';

function Navbar() {
  return (
    <>
      <div className='flex bg-blue-600 py-4 px-20 justify-center md:justify-between text-center'>
        <div className='text-white text-3xl'>
            URL Shortner
        </div>
        {/* <div className='text-white text-center'>
            About
        </div> */}
      </div>
    </>
  )
}

export default Navbar