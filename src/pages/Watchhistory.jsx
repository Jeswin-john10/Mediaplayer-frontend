import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { gethistory, removewatchhistory } from '../service/allapi';
function Watchhistory() {

  const [allhistoryvideo, setAllhistoryvideo] = useState([])
const[deletestatus, setDeletestatus]=useState([])


const handledelete=async(id)=>{
  const result=await removewatchhistory(id)
  console.log(result);
if(result.status >=200 && result.status<300){
  setDeletestatus(result)
}
}





  const getAllvideos = async () => {
    const result = await gethistory()
    console.log(result);
    setAllhistoryvideo(result.data)

  }
  console.log(allhistoryvideo);

  useEffect(() => {
    getAllvideos()
  }, [deletestatus])

  return (
    <>

      <div className='container-fluid'>
        <div className='d-flex justify-content-between px-5 pt-3'>
          <h3>Watch History</h3>
          <Link to={'/Home'} style={{ textDecoration: "none" }}><h4><FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-md-inline d-none'>Back Home</span></h4></Link>

        </div>


      </div>

      {allhistoryvideo?.length > 0 ?
        <div className='container-fluid w-100'>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 table responsive">
              <div className="table table-bordered mt-5">
                <thead>
                  <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>Caption</th>
                    <th className='text-center'>Url</th>
                    <th className='text-center'>Time Stamp</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allhistoryvideo?.map((item, index) => (
                    <tr>
                      <td className='text-center'>{index + 1}</td>
                      <td className='text-center'>{item?.caption}</td>
                      <td className='text-center'><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
                      <td className='text-center'>{item?.timestamb}</td>
                      <td className='text-center'><button onClick={()=>handledelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
                    </tr>

                  ))}

                </tbody>
              </div>
            </div>
          </div>
        </div>
        :


        <h3 className='text-center text-danger mt-5'>No Watch History</h3>
      }

    </>
  )
}

export default Watchhistory