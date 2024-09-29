import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Update from './Update'

function View() {

  const [ data,setData ] = useState({})

  const { id } = useParams()
  console.log(id);

  const { employee } = useSelector((state)=>state.employeeReducer)

  useEffect(()=>{
    const emp = employee.find(item=>item.id==id)
    setData(emp)
  },[employee])
  
  return (
    <>
    <div className='m-3'>
      <div className='container-fluid border border-primary shadow border-1 rounded-3 p-3 container-fluid'>
         
            {
              data &&
              <Row>
                <Col md={1}></Col>
              <Col sm={12} md={5} className='d-flex align-items-center' style={{height:'70vh'}}>
                  <img src={data?.eimg} 
                  className='rounded-5 img-fluid' alt="" />
              </Col>
              <Col md={1}></Col>
              <Col sm={12} md={4} className='d-flex align-items-center'>
                <div>
                  <div className='d-flex '>
                  <h1 className='text-primary mb-3'>{data?.ename}</h1>
                  <Update edit = {data}/>
                  </div>
                  <h6>Designation: <span className='text-primary fw-bold'>{data?.designation}</span></h6>
                  <h6>Department: <span  className='text-primary fw-bold'>{data?.department}</span></h6>
                  <h6>Project Assigned: <span  className='text-primary fw-bold'>{data?.pname}</span></h6>
                  <h6>Project Status: <span  className='text-primary fw-bold'>{data?.pstatus}</span></h6>
                  <h6>Project Deadline: <span  className='text-primary fw-bold'>{data?.deadline}</span></h6>
                </div>
              </Col> 
              </Row>
            }
      </div>
    </div>
    </>
  )
}

export default View