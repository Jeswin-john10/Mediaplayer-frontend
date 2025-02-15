import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addapihistory, removevideoapi } from '../service/allapi';

function Videocard({videoDetails,setDeletestatus,present}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
let caption = videoDetails?.caption
let url=videoDetails?.embeddedurl
const time =new Date()
console.log(time);
const timestamb = new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",second:"2-digit"}).format(time)
console.log(timestamb);

const reqBody={
  caption,
  url,
  timestamb
}


const result=await addapihistory(reqBody)
console.log(result);

  }



const handleDelete=async(id)=>{
  const result=await removevideoapi(id)
  console.log(result);
  if(result.status >= 200 && result.status<300){
    setDeletestatus(result)
  }
  
}
const handledrag=(e,videtails)=>{
  console.log(e);
  console.log(videtails);
  
  e.dataTransfer.setData("videodetails",JSON.stringify(videtails))
}


  return (
    <>
    <div >

      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>handledrag(e,videoDetails)} >
{ !present &&      <Card.Img onClick={handleShow} variant="top" style={{ width: "100%", height: "300px" }} src={videoDetails?.imgurl} />
}        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Title>{videoDetails ?.caption}</Card.Title>

{!present&&          <Button onClick={(id)=>handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></Button>
}        </Card.Body>
      </Card>




      
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="315" src={videoDetails?.embeddedurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>
 
  </>
  )
}

export default Videocard