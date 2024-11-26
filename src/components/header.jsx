import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'


const Header = () => {
  const {user, isSignedIn} = useUser()
  return (
    <div className='flex justify-between items-center'>
        <img src='/images/logo.webp' width={80} height={50} alt='Logo' />

        <ul className='flex gap-4 text-emerald-400'>
            <li>Home</li>
            <li>Serch</li>
            <li>New</li>
            <li>Preowned</li>

        </ul>
        {
          isSignedIn ?
          <div>
            <UserButton/>
            <Button>Submit Listing</Button>
          </div>
          :
          <Button>Submit Listing</Button>
        }
    </div>
  )
}

export default Header