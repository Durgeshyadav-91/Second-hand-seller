import { Input } from '@/components/ui/input'
import React from 'react'

const InputField = ({item}) => {
  return (
    <div>
        <Input name={item.name}/>
    </div>
  )
}

export default InputField