import React from 'react'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Videocard from './Videocard'
function Category() {
  return (
    <>
    <h4> Category</h4>
    <button className='btn btn-warning w-100 mt-4'>Add Category</button>
    <div className='border border-secondary mt-3'>
        <div className='d-flex justify-content-between align-items-center p-3 rounded mt-4'>
            <h5>Malayalam Songs</h5>
            <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{color:"white"}} /></Button>

        </div>
        <Videocard/>
    </div>
    <h5 className='text-center text-danger mt-5'>No Category Added</h5>
    </>
  )
}

export default Category