import React from 'react'
import Videocard from './Videocard'

function Allvideos() {
  return (
    <div>
        <h2>All Videos</h2>
        <div className='container-fluid mt-5'>
<div className='row'>
    <div className='col-md-3 '>
        <Videocard/>
    </div>
    <div className='col-md-3'>
    <Videocard/>
    </div>
    <div className='col-md-3'>
    <Videocard/>
    </div>
    <div className='col-md-3'>
    <Videocard/>
    </div>

</div>
        </div>
 
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
    </div>

    
  )
}

export default Allvideos