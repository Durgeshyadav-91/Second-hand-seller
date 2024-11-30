import Header from "@/components/Header";
import carDetails from './../Shared/carDetails.json'
import React from "react";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextareaField from "./components/TextareaField";

const AddListing = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:mx-20 py-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          <div className="">
            <h2 className="font-medium text-xl">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carDetails.carDetails.map((item, idx)=> (
                    <div key={idx}>
                      <label className="text-sm">{item?.label} {item.required&&<span className="text-red-500">*</span>}</label>
                        {item.fieldType=="text" || item.fieldType=="number"?<InputField item={item}/>
                        :item.fieldType==="dropdown"?<DropdownField item={item}/>
                        :item.fieldType==="textarea"?<TextareaField item={item}/>
                        :null}
                    </div>
                ))}
            </div>
          </div>

          {/* features List */}
          <div>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddListing;
