import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
// import './index.css'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchCar from './components/MostSearchCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
        {/* <SignInButton mode='modal' forceRedirectUrl='/'>
            <Button>Sign In</Button>
        </SignInButton> */}
        <Header/>
        <Hero/>
        <Category/>
        <MostSearchCar/>
        <InfoSection/>
        <Footer/>
    </div>
  )
}

export default Home;