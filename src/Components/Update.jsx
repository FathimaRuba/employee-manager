import React, { useState,useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { editEmployee } from '../Redux/employeeSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Update({ edit }) {

    const { employee } = useSelector((state) => state.employeeReducer)

    const [update, setUpdate] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setUpdate({
            ename: edit.ename, id: edit.id, designation: edit.designation, department: edit.department,
            pname: edit.pname, pstatus: edit.pstatus, eimg: edit.eimg, deadline: edit.deadline
        })
    }

    const dispatch = useDispatch()
    
    const handleEdit=()=>{
        console.log(update)
        // console.log(employee)
        dispatch(editEmployee(update))
        handleClose()
    } 
    return (
        <>
            <div className='container-fluid'>
                <button className='btn text-end' onClick={handleShow}>
                    <i className="fa-solid fa-pen-to-square fa-xl text-primary" />
                </button>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

                    <Modal.Header closeButton className='bg-primary-subtle'>
                        <Modal.Title className='bg-primary-subtle text-primary'>Edit Employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='bg-primary-subtle'>

                        <FloatingLabel controlId="floatingId" label="Id" className="mb-3">
                            <Form.Control type="number" placeholder="img-url" value={edit.id} disabled />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Employee Name" className="mb-3">
                            <Form.Control type="text" value={update.ename} placeholder="name" className="mb-3"
                                onChange={(e) => { setUpdate({ ...update, ename: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingImg" label="Image-Url" className="mb-3">
                            <Form.Control type="text" placeholder="img-url" value={update.eimg}
                                onChange={(e) => { setUpdate({ ...update, eimg: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingDes" label="Designation" className="mb-3">
                            <Form.Control type="text" placeholder="software-developer" value={update.designation}
                                onChange={(e) => { setUpdate({ ...update, designation: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingDept" label="Department" className="mb-3">
                            <Form.Control type="text" placeholder="IT" value={update.department}
                                onChange={(e) => { setUpdate({ ...update, department: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingProj" label="Project Name" className="mb-3">
                            <Form.Control type="text" placeholder="Task-Manager" value={update.pname}
                                onChange={(e) => { setUpdate({ ...update, pname: e.target.value }) }} />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingStat" label="Project Status" className="mb-3">
                            <Form.Select className="form-control" value={update.pstatus}
                                onChange={(e) => { setUpdate({ ...update, pstatus: e.target.value }) }} >
                                <option value=''>---Select Status---</option>
                                <option value="pending">Pending</option>
                                <option value="testing">Testing</option>
                                <option value="completed">Completed</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingLast" label="Deadline" className="mb-3">
                            <Form.Control type="date" placeholder="date" value={update.deadline}
                                onChange={(e) => { setUpdate({ ...update, deadline: e.target.value }) }} />
                        </FloatingLabel>

                    </Modal.Body>

                    <Modal.Footer className='bg-primary-subtle'>
                        <Button variant="secondary" onClick={handleClose} className='rounded-pill'>
                            Close
                        </Button>
                        <Button variant="primary" className='rounded-pill' onClick={handleEdit}>Edit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </>
    )
}

export default Update