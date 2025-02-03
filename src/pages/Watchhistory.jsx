import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Watchhistory() {
  return (
<>

<div className='container-fluid'>
<div className='d-flex justify-content-between px-5 pt-3'>
<h3>Watch History</h3>
<Link to={'/Home'} style={{textDecoration:"none"}}><h4><FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-md-inline d-none'>Back Home</span></h4></Link>

  </div>
  <div className='row mt-5'>
<div className='col-1'></div>
<div className='col-md-10 table-responsive'>
  <table style={{width:"100%",textAlign:"center"}}>
    <tr style={{border:"1px solid white"}}>
      
      <th style={{border:"1px solid white "}}>#</th>
      <th style={{border:"1px solid white "}}>Caption</th>
      <th style={{border:"1px solid white"}}>Url</th>
      <th style={{border:"1px solid white"}}>Time Stamb</th>
      <th style={{border:"1px solid white"}}>Action</th>
    </tr>
    <tr style={{border:"1px solid white"}}>
      <td style={{border:"1px solid white"}}>1</td>
      <td style={{border:"1px solid white"}}>kgf2</td>
      <td style={{border:"1px solid white"}}>gggggggg</td>
      <td style={{border:"1px solid white"}}>24/05/2025</td>
      <td style={{border:"1px solid white"}}>        <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{color:"white"}} /></Button>
      </td>
    </tr>
  </table>
</div>

<div className='col-1'></div>

</div>
<h5 className='text-center text-danger mt-5'> No Watch History</h5>
</div>
</>  
)
}

export default Watchhistory