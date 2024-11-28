import Header from "@/components/Header";
import {carDetails} from './../Shared/carDetails.json'
import React from "react";
import InputField from "./components/InputField";

const AddListing = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:mx-20 py-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          <div className="">
            <h2 className="font-medium text-xl">Car Details</h2>
            <div>
                {carDetails.carDetails.map((item, idx)=> (
                    <div key={idx}>
                        {item.fieldType=="text"|| item.fieldType=="number"?<InputField/>:null}
                    </div>
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
