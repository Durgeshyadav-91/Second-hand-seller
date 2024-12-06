import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../config'
import { allListing, AllListingImages } from './../../../config/schema'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MyListing = () => {

  const {user} = useUser();

  useEffect(() => {
    user && GetUserAllListing();
  }, [user])
  

  const GetUserAllListing = async () => {
    const result = await db.select().from(allListing)
    .leftJoin(AllListingImages, eq(allListing.id, AllListingImages.allListingId))
    .where(eq(allListing.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(allListing.id))

    console.log("resultresult",result);

    
  }
  return (
    <div className='flex justify-between items-center py-4'>
        <h2 className='font-bold text-4xl'>My Listing</h2>
        <Link to={"/add-listing"}>
            <Button className="text-white">+ Add New Listing</Button>
        </Link>
    </div>
  )
}

export default MyListing