import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import './index.css'
import { Button } from './components/ui/button'
import Header from './components/Header'

const Home = () => {
  return (
    <div>
        {/* <SignInButton mode='modal' forceRedirectUrl='/'>
            <Button>Sign In</Button>
        </SignInButton> */}
        <Header/>
    </div>
  )
}

export default Home;