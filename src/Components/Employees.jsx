import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../Redux/employeeSlice';

function Employees() {

  const { employee } = useSelector((state) => state.employeeReducer)

  const dispatch = useDispatch()

  return (
    <div className='container-fluid row'>
      {
        employee?.length > 0 ?
          employee.map(item => (
            <Card style={{ width: '15rem' }} className='rounded-4 border-primary m-3 text-center'>
              <Card.Img variant="top" className='ps-4 pt-3' style={{ borderRadius: '50%', height: '150px', width: '200px' }} src={item?.eimg} />
              <Card.Body>
                <Card.Title className='text-primary fw-bold'>
                  {item?.ename}
                  </Card.Title>
                <Card.Text className='fw-bold'>
                  {item?.designation}
                </Card.Text>
               <div className='d-flex justify-content-between'>
                  <Link to={`/view/${item?.id}`} className='btn btn-outline-primary rounded-pill'>View Details</Link>
                  <button className='btn text-primary' onClick={()=>{dispatch(deleteEmployee(item?.id))}}><i className="fa-solid fa-trash fa-lg" />
                  </button>
               </div>
              </Card.Body>
            </Card>
          ))
          :
          <marquee><h2>No Employees Added</h2></marquee>
      }

    </div>
  )
}


export default Employees