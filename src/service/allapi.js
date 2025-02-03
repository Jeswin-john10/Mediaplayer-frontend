import { commonapi } from "./commonapi"
import { serverurl } from "./Serverurl"

export const addvideoapi=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/videos`,reqBody)
}