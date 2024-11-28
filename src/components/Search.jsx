import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";

const Search = () => {
  return (
    <div className="w-[60%] flex flex-col md:flex-row gap-12 bg-white rounded-md md:rounded-full p-2 md:p-6 px-5 items-center">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator
        className="text-black hidden md:block"
        orientation="vertical"
      />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker,idx)=> (
              <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator
        className="text-black hidden md:block"
        orientation="vertical"
      />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
        {Data.Pricing.map((price,idx)=> (
              <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <CiSearch className="text-white font-bold bg-primary rounded-full p-4 text-[40%] hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
