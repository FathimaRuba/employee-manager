import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='container rounded-5'>
        <div className='bg-primary-subtle rounded-5 my-5 d-flex justify-content-center align-items-centerpy-5' style={{height:'80vh'}}>
            <div className='text-center text-primary'>
                <img src="https://blogimage.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png" className='rounded-5 mb-2 img-fluid' alt="" />
                <h3>Welcome To Employee-Manager</h3>
                <p>The Employee Manager is a comprehensive solution designed to streamline the management of employees within an organization. This tool enables managers to effectively track, monitor, and support their workforce with features that simplify daily tasks, improve communication, and foster team productivity.</p>
                <Link className='btn btn-primary rounded-pill' to={'/home'}>Get Started...</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing