import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropdownField = ({ item, handleInputChange }) => {
  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name, value)} required={item?.required}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item?.lable} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {item.options?.map((option, idx) => (
            <SelectItem value={option}>{option}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropdownField;
