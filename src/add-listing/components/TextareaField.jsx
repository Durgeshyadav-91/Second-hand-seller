import React from 'react'
import { Textarea } from "@/components/ui/textarea"


const TextareaField = ({item, handleInputChange}) => {
  return (
    <div className='pb-2'>
        <Textarea onChange={(e)=>handleInputChange(item.name, e.target.value)} name={item?.name} required={item?.required}/>
    </div>
  )
}

export default TextareaField