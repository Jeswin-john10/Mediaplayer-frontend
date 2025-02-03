import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addvideoapi } from '../service/allapi';
import { ToastContainer, toast } from 'react-toastify';
function Add() {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgurl: "",
    embeddedurl: ""
  })
  console.log(videoDetails);

  const handlecancel = () => {
    setVideoDetails({
      caption: "",
      imgurl: "",
      embeddedurl: ""
    })

  }
  const handleadd = async () => {
    const { caption, imgurl, embeddedurl } = videoDetails // destructure
    if (!caption || !imgurl || !embeddedurl) {
      // alert('fill the form')
      toast.info('fill the form')
    } else {

      // https://www.youtube.com/watch?v=7h4FhEePjuU        

      if (embeddedurl.startsWith("https://youtu.be/")) {
        let link = `https://www.youtube.com/embed/${embeddedurl.slice(17, 28)}`
        console.log(link);
        const result = await addvideoapi({ caption, imgurl, embeddedurl: link })
        console.log(result);
        if(result.status >=200 && result.status <=300){
          // toast.success('media upload successfully')
          alert('media added succesfully')
        }else{
          // toast.warning(`something went wrong`)
          alert('something went wrong')
        }

      } else {
        let link = `https://www.youtube.com/embed/${embeddedurl.slice(-11)}`
        console.log(link);
        const result = await addvideoapi({ caption, imgurl, embeddedurl: link })
        console.log(result);
      }
      // alert('succesfully upload')






      //https://youtu.be/7h4FhEePjuU?feature=shared           share
      //<iframe width="560" height="315" src="https://www.youtube.com/embed/7h4FhEePjuU?si=djjwJW993KT9LYcr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
  }

  const handleClose = () => {
    setShow(false)
    handlecancel()
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <h4>Upload New Video  <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /></h4>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  <h4 className='text-warning'><FontAwesomeIcon icon={faFilm} className='text-warning me-3' />   Upload Videos</h4></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>please fill the folllowing details</p>
          <form action='' className='border border-secondary p-3 rounded'>
            <div className='mb-3'><input value={videoDetails.caption} onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" className='text-center' placeholder='Video Caption' style={{ width: "100%" }} /></div>
            <div className='mb-3'><input value={videoDetails.imgurl} onChange={(e) => setVideoDetails({ ...videoDetails, imgurl: e.target.value })} type="text" className='text-center' placeholder='Video Image' style={{ width: "100%" }} /></div>
            <div className='mb-3'><input value={videoDetails.embeddedurl} onChange={(e) => setVideoDetails({ ...videoDetails, embeddedurl: e.target.value })} type="text" className='text-center' placeholder='Video Url' style={{ width: "100%" }} /></div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handlecancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleadd}>
            Upload
          </Button>
        </Modal.Footer>
        <ToastContainer position="top-center"
autoClose={1000}
theme="light"
/>
      </Modal>
      
    </>
  )
}

export default Add