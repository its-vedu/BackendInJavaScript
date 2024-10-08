import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
cloudinary.config({
    cloud_name: process.env.CLODINARY_CLOUD_NAME,
    api_key: process.env.CLODINARY_API_KEY,
    api_secret :process.env.CLODINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath){
            return null
        }
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        // console.log("file uploaded on cloudinary ",response.url);
        fs.unlinkSync(localFilePath)
        // console.log(response)
        return response;
        
        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
console.log(response)

export {uploadOnCloudinary}
