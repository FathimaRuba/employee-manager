import React from 'react'
import Add from '../Components/Add'
import Employees from '../Components/Employees'
import { Row,Col } from 'react-bootstrap'

function Home() {
    return (
        <>
            <div className='container-fluid'>
                <Add />
            </div>

              <div className='mx-3 '>
              <div className='container-fluid border shadow border-primary border-2 py-3 px-2  my-3 rounded-4'>

                <Row>
                    <Col >
                        <Employees/>
                    </Col>
                </Row>
                </div>
              </div>
        </>

    )
}

export default Home