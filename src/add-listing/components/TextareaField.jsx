import React from 'react'
import { Textarea } from "@/components/ui/textarea"


const TextareaField = ({item}) => {
  return (
    <div>
        <Textarea name={item?.name} />
    </div>
  )
}

export default TextareaField