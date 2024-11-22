import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/header'

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

export default Home