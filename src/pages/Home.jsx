import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const[ucstatus,setUcstatus]=useState([])
  const[addstatus , setAddstatus]=useState([])
  return (
  <>
  
  <div className='container d-flex justify-content-between  mt-5'>
<Add setAddstatus={setAddstatus}/>
<Link to={'/Watchhistory'} style={{textDecoration:"none"}}> <h5>Watch History</h5></Link>
    </div>
    <div className='container-fluid p-4'>
<div className='row'>
<div className='col-md-9'>
  <Allvideos addstatus={addstatus} setUcstatus={setUcstatus}/>
</div>
<div className='col-md-3'>
  <Category ucstatus={ucstatus}/>
</div>
</div>
    </div>
    </>
  )
}

export default Home