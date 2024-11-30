import { Input } from '@/components/ui/input'
import React from 'react'

const InputField = ({item, handleInputChange}) => {
  return (
    <div>
        <Input className='border rounded-md' type={item?.fieldType} 
        onChange={(e)=>handleInputChange(item.name,e.target.value)} name={item?.name} required={item?.required} />
    </div>
  )
}

export default InputField