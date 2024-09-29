import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../Redux/employeeSlice';
import { useDispatch } from 'react-redux';

function Add() {

  
    const dispatch = useDispatch()

    const [employees, setEmployees] = useState({
        id:'',ename: '', eimg: '', designation: '', department: '', pname: '', pstatus: '', deadline: ''
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () => {
        console.log(employees)
        dispatch(addEmployee(employees))
        handleClose()
    }
    return (
        <>
            <div>
                <button onClick={handleShow} className='btn btn-primary rounded-5 m-2'>
                    <i className="fa-solid fa-plus fa-lg"></i>
                </button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton className='bg-primary-subtle'>
                        <Modal.Title className='bg-primary-subtle text-primary'>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-primary-subtle'>
                    <FloatingLabel controlId="floatingId" label="Id" className="mb-3">
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, id: e.target.value }) }} type="number" placeholder="img-url" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Employee Name"
                            className="mb-3"
                        >
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, ename: e.target.value }) }} type="text" placeholder="name" className="mb-3" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingImg" label="Image-Url" className="mb-3">
                            <Form.Control onChange={(e) => { setEmployees({ ...employees, eimg: e.target.value }) }} type="text" placeholder="img-url" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDes" label="Designation" className="mb-3">
                            <Form.Control type="text" placeholder="software-developer" onChange={(e) => { setEmployees({ ...employees, designation: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingDept" label="Department" className="mb-3">
                            <Form.Control type="text" placeholder="IT" onChange={(e) => { setEmployees({ ...employees, department: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingProj" label="Project Name" className="mb-3">
                            <Form.Control type="text" placeholder="Task-Manager" onChange={(e) => { setEmployees({ ...employees, pname: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingStat" label="Project Status" className="mb-3">
                            <Form.Select
                                onChange={(e) => {
                                    setEmployees({ ...employees, pstatus: e.target.value });
                                }}
                                className="form-control"
                            >
                                <option value="">--Select Status--</option>
                                <option value="pending">Pending</option>
                                <option value="testing">Testing</option>
                                <option value="completed">Completed</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingLast" label="Deadline" className="mb-3">
                            <Form.Control type="date" placeholder="IT" onChange={(e) => { setEmployees({ ...employees, deadline: e.target.value }) }} />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer className='bg-primary-subtle'>
                        <Button variant="secondary" onClick={handleClose} className='rounded-pill'>
                            Close
                        </Button>
                        <Button variant="primary" className='rounded-pill' onClick={handleAdd}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Add