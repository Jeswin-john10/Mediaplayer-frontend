import { commonapi } from "./commonapi"
import { serverurl } from "./Serverurl"

export const addvideoapi=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/videos`,reqBody)
}

//get video api
export const videoapi=async()=>{
    return await commonapi('GET',`${serverurl}/videos`,"")
}

// remove video api

export const removevideoapi=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/videos/${id}`,{})
}

// add videos to watch history
export const addapihistory=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/history`,reqBody)
}
// api to get watchhistory
export const gethistory=async()=>{
    return await commonapi('GET',`${serverurl}/history`,"")
}


//all api to delete history
export const removewatchhistory=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/history/${id}`,{})
}


//api to add to category
export const addapicategory=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/category`,reqBody)
}

// api to get category
export const getcategoryapi=async()=>{
    return await commonapi('GET',`${serverurl}/category`,"")
}
  //api to delete category
  export const removecategory=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/category/${id}`,{})
}
// api to update  category videos
export const updatecategoryapi=async(categoryid,reqBody)=>{
    return await commonapi('PUT',`${serverurl}/category/${categoryid}`,reqBody)
}