import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<div className='py-4 px-4'>
    <div className='container-fluid'>
      <div className='row'>
<div className='col-md-4'>
<h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-3' /> Media Player</h4>
<p style={{textAlign:"justify"}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus expedita 
  nemo maxime dolor voluptatem quod necessitatibus provident quos cupiditate illum!</p>
</div>
<div className='col-md-2 d-md-flex justify-content-center mt-4 mt-md-0'>
 <div>
 <h4>Links</h4>
<Link to={'/'} ><p>Landing Page</p></Link>
<Link to={'/Home'} ><p>Home</p></Link>
<Link to={'/Watchhistory'} ><p>Watch History</p></Link>
 </div>

</div>
<div className='col-md-2 d-md-flex justify-content-center mt-4 mt-md-0'>
 <div >
 <h4>Guides</h4>
<Link  ><p>React</p></Link>
<Link ><p>React Bootstrap</p></Link>
<Link ><p></p>Bootswatch</Link>
 </div>

</div>

<div className='col-md-4 mt-4 mt-md-0'>
  <h4>Contact Us</h4>
  <div className='d-flex'>
    <input type="text" placeholder='Email Id'  className='form=control w-75'/>
<button className='btn btn-warning ms-2'>Subscribe</button>
  </div>
  <div className='d-flex justify-content-between mt-5' style={{fontSize:"2rem"}}>
  <FontAwesomeIcon icon={faLinkedin} />
  <FontAwesomeIcon icon={faFacebook} />
  <FontAwesomeIcon icon={faX} />
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faWhatsapp} />
  </div>
</div>

      </div>

    </div>
    </div>
  )
}

export default Footer