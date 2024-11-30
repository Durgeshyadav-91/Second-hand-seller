import Header from "@/components/Header";
import carDetails from "./../Shared/carDetails.json";
import features from "./../Shared/features.json";
import React, { useState } from "react";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextareaField from "./components/TextareaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "./../../config";
import { allListing } from "./../../config/schema";
import IconField from "./components/IconField";
import UploadImages from "./components/UploadImages";
import { BiLoaderAlt } from "react-icons/bi";
import { Toaster } from './../components/ui/sonner'
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData)=>({
      ...prevData,
      [name]:value
    }))
  }

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    Toaster("Please Wait...")
    try {
      const result = await db.insert(allListing).values({
        ...formData,
        features:featuresData
      }).returning({id:allListing.id})
      if (result) {
        console.log("Data Saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:mx-20 py-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          <div className="">
            <h2 className="font-medium text-xl">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carDetails.carDetails.map((item, idx) => (
                <div key={idx}>
                  <label className="text-sm flex gap-2 py-4 items-center">
                    <IconField icon={item?.icon} />
                    {item?.label}{" "}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      handleInputChange={handleInputChange}
                      item={item}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextareaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />
          {/* features List */}
          <div className="">
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeatureChange(item.name, value)
                    }
                    className="text-white"
                  />
                  <h2>{item?.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />
          {/* Car Images */}

          <UploadImages triggerUploadImages={triggerUploadImages} setLoader={(v)=>{setLoader(v); navigate('/profile')}}/>
          <div className="mt-10 flex justify-end">
            <Button type="submit" 
            disabled={loader}
            onClick={(e) => onSubmit(e)}>
              {!loader? "Submit" : <BiLoaderAlt className="animate-spin text-lg"/>}
              
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
