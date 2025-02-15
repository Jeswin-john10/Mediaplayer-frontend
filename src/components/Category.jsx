import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Videocard from './Videocard'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addapicategory, getcategoryapi, removecategory, updatecategoryapi } from '../service/allapi';
import { toast } from 'react-toastify';
function Category({ucstatus}) {

  const [categoryname, setCategoryname] = useState("")
  const[Upadatecategorystatus,setUpdatecategorystatus]=useState([])
  console.log(categoryname);
  const handleCancel = () => {
    setCategoryname("")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deletecategory, setDeletecategory] = useState([])

  const [allcategory, setAllcategory] = useState([])
  const [categorystatus, setCategorystatus] = useState("")
  const handleAdd = async () => {
    if (!categoryname) {
      toast.warning('Enter category name')

    } else {
      const reqBody = {
        categoryname,
        Alvideos: []
      }

      const result = await addapicategory(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('category added successfully')
        handleClose()
        handleCancel()
      } else {
        toast.warning('something went wrong')

        handleCancel()

      }
    }
  }


  const getcategory = async () => {
    const result = await getcategoryapi()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllcategory(result.data)
      setCategorystatus(result)
    }
  }
  console.log(allcategory);

  useEffect(() => {
    getcategory()
  }, [updatecategoryapi,ucstatus])



  const handledelete = async (id) => {
    const result = await removecategory(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeletecategory(result)
    }
  }
  console.log(deletecategory);

const videoover=(e)=>{
e.preventDefault()
}
const videodrop=async(e,categorydetails)=>{
  console.log(categorydetails);
  const videodetails =JSON.parse(e.dataTransfer.getData("videodetails"))
  console.log(videodetails);
  if(categorydetails.Alvideos.find((item)=>item.id == videodetails.id)){
    alert('video already added in the same category')
  }else{
    categorydetails.Alvideos.push(videodetails)
    console.log(categorydetails);
    const result=await updatecategoryapi(categorydetails.id,categorydetails)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setUpdatecategorystatus(result)
    }
  }
}


const videodrag=(e,videoDetails,categorydetails)=>{
console.log(categorydetails,videoDetails);
const details={
  categorydetails,
  videoDetails
}
e.dataTransfer.setData("details",JSON.stringify(details))
}
  return (
    <>
      <h4> Category</h4>
      <button onClick={handleShow} className='btn btn-warning w-100 mt-4'>Add Category</button>

      {allcategory?.length > 0 ?
        allcategory?.map((item) => (
          <div className='border border-secondary mt-3' droppable onDragOver={(e)=>videoover(e)} onDrop={(e)=>videodrop(e,item)}>
            <div className='d-flex justify-content-between align-items-center p-3 rounded mt-4'>
              <h5>{item?.categoryname}</h5>
              <Button onClick={() => handledelete(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></Button>

            </div>
            
          {item?.Alvideos.length > 0 && item?.Alvideos.map((video)=>(
            <div draggable onDragStart={(e)=>videodrag(e,video)}> <Videocard videoDetails={video} present={true} />
</div>
          ))
           }
          </div>
        ))

        :
        <h5 className='text-center text-danger mt-5'>No Category Added</h5>


      }


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border- shadow rounded-2'><input value={categoryname} onChange={(e) => setCategoryname(e.target.value)} className='form-control' type="text" placeholder='Enter category name' /></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category