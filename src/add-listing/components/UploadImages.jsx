import { Button } from "@/components/ui/button";
import { storage } from "./../../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AllListingImages } from "./../../../config/schema";
import { db } from "./../../../config";

const UploadImages=({triggerUploadImages, setLoader}) => {

    const [selectedFileList, setSelectedFileList] = useState([]);

    useEffect(()=>{
        if(triggerUploadImages){
            UploadImageToServer();
        }
    },[triggerUploadImages])

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      console.log(file);
      setSelectedFileList((prev)=>[...prev,file]);
    }
  };

  const onImageRemove = (image, idx) => {
    const result = selectedFileList.filter((item)=>item!=image);
    setSelectedFileList(result)
  }


  const UploadImageToServer = async() => {
    setLoader(true)
    await selectedFileList.forEach((file)=>{
        const fileName = Date.now()+".jpeg";
        const storageRef = ref(storage, 'second-hand-seller-all-images'+fileName);
        const metaData = {
            contentType: "image/jpeg"
        }
        uploadBytes(storageRef, file, metaData).then((snapShot)=>{
            console.log("Uploaded File!!");
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(downloadUrl)=>{
                console.log(downloadUrl);
                await db.insert(AllListingImages).values({
                    imageUrl:downloadUrl,
                    imageListingId:triggerUploadImages
                })
            })
        })
        setLoader(false)
    })
  }

  return (
    <div>
      <h2 className="font-medium text-xl my-4">Upload Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {selectedFileList.map((image, idx)=> (
                <div key={idx}>
                    <IoIosCloseCircle className="absolute m-1 cursor-pointer text-lg" 
                    onClick={(e)=>onImageRemove(image, idx)}/>
                    <img src={URL.createObjectURL(image)} className="w-full h-[150px] object-cover rounded-xl"/>
                </div>
            ))
        }

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-lg">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          className="opacity-0"
          onChange={onFileSelected}
        />
      </div>
    </div>
  );
};

export default UploadImages;
