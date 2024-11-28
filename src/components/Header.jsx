import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


const Header = () => {
  const {user, isSignedIn} = useUser()
  return (
    <div className='flex justify-between items-center px-4 md:px-12 py-2'>
        <img src='/images/logo-black.png' width={100} height={90} alt='Logo' />

        <ul className='hidden md:flex gap-16 text-gray-700'>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Serch</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>

        </ul>
        <div>
        {
          isSignedIn ?
          <div className='flex items-center gap-4'>
            <UserButton/>
            <Link to={"/profile"}>
            <Button className="text-white">Submit Listing</Button>
            </Link>
          </div>
          :
          <Button className="text-white">Submit Listing</Button>
        }
        </div>
    </div>
  )
}

export default Header