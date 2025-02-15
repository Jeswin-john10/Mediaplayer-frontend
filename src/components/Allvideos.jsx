import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { videoapi } from '../service/allapi';
import Category from './Category';

function Allvideos({addstatus,setUcstatus}) {
  const [videos, setVideos] = useState([])
  const [deletestatus ,setDeletestatus]=useState([])
  const getAllvideos = async () => {
    const result = await videoapi()
    console.log(result);
    setVideos(result.data)
  }
  console.log(videos);


const dragover=(e)=>{
  e.preventDefault()
}


const videodrop=async(e)=>{
const{videoDetails,categorydetails}=JSON.parse(e.dataTransfer.getData("details"))
const response =categorydetails.allvideos.filter((item)=>item.id != videoDetails.id)

const reqBody={
  categoryname:categorydetails.categoryname,
  allvideos:response,
  id:categorydetails.id
}
const result=await  updatecategoryapi(categorydetails.id,reqBody)
console.log(result);
if(result.status >=200 && result.status <300){
  setUcstatus(result)

}

}
  
  useEffect(() => {
    getAllvideos()
  },[addstatus,deletestatus])
  return (
    <div>
      <h2>All Videos</h2>
{
videos?.length >0?
  
      <div className='container-fluid mt-5 ' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videodrop(e)}>
        <div className='row'>
         {videos?.map((item)=>(
           <div className='col-md-3 '>
           <Videocard videoDetails={item} setDeletestatus={setDeletestatus}/>
         </div>
         ))

         }


        </div>
      </div>
:
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-md-4'>
            <img className='w-100' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png" alt="" />
            <h4 className='text-center text-danger'>No video added yet!</h4>
          </div>
          <div className='col-4'></div>

        </div>
      </div>
    
}
    </div>

  )
}

export default Allvideos