import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Theamcontext } from '../Context/Theamcontext'
import { GoPerson, GoSearch } from "react-icons/go";
import { IoBagHandleOutline } from 'react-icons/io5';

function Navbar() {
  const {light,theamset}=useContext(Theamcontext)
  return (
    <div className='container-fliud position-fixed top-0 w-100' style={{backgroundColor:"Window", zIndex:"99"}}>
    <div className='container d-none d-sm-none d-md-none d-lg-none d-xl-block'>
    <div className='row'>
        <div className='col-12 '>
           <div className='row '>
           <div className='col-1 pt-3 pb-1'>
                <img src='https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg'></img>
            </div>
            <div className='col-6 pt-3 pb-1' >
                <ul className='d-flex list-unstyled justify-content-around'>
                    <li className='main-nav'><Link to='/' className='nav-links'>Camera Drone</Link>
                    <span className='navabar-span'></span>
                    </li>
                    <li className='main-nav'><Link to='/Handheld' className='nav-links'>Handheld</Link>
                    <span className='navabar-span'></span></li>
                    <li className='main-nav'><Link to='/Power' className='nav-links'>Power</Link>
                    <span className='navabar-span'></span></li>
                    <li className='main-nav'><Link to='/Specialized' className='nav-links'>Specialized</Link>
                    <span className='navabar-span'></span></li>
                    <li className='main-nav'><Link to='/Explore' className='nav-links'>Explore</Link>
                    <span className='navabar-span'></span></li>
                    <li className='main-nav'><Link to='/Support' className='nav-links'>Support</Link>
                    <span className='navabar-span'></span></li>
                    <li className='main-nav'><Link to='/Buy' className='nav-links'>Where To Buy</Link>
                    <span className='navabar-span'></span></li>
                </ul>
            </div>
            <div className='col-2'></div>
            <div className='col-3 pb-1 ps-4 pe-4 d-flex justify-content-end'>
            {/* <button onClick={theamset}>{light}</button> */}
             <div className='serach-main d-flex align-items-center'>
             <GoSearch  style={{fontSize:"22px", margin:"0px 5px"}} />
             <div className='login-icon'>
             <GoPerson  style={{fontSize:"25px" ,margin:"0px 12px"}}/>
             <div className='login-icon-vice'>
              <Link to='/Login' className='links-login' style={{color:"black", textDecoration:"none", fontSize:"12px", lineHeight:"12px", display:"block", textAlign:"center", padding:"16px 32px"}}>Login</Link>
              <Link to='/Register' className='links-login' style={{color:"black", textDecoration:"none", fontSize:"12px", lineHeight:"12px", display:"block", textAlign:"center", padding:"16px 32px"}}>Register</Link>
             </div>
             </div>
             <Link to='/description' className='nav-bag-icon text-decoration-none'>
             <IoBagHandleOutline style={{margin:"0px 10px 0px 0px"}}/>
             Buy
             </Link>
             </div>

            </div>
           </div>
        </div>
    </div>
    </div>
    <nav className="navbar navbar-expand-xl d-block d-sm-block d-md-block d-lg-block d-xl-none navbar-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src='https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg'></img></a>
    <span className=''>
             <Link className='text-dark' to='/description'><IoBagHandleOutline style={{margin:"0px 10px 0px 0px", fontSize:"25px"}}/></Link>
             </span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className='list-unstyled '>
                    <li className='main-nav mt-4 mb-4'><Link to='/' className='nav-links'>Camera Drone</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Handheld' className='nav-links'>Handheld</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Power' className='nav-links'>Power</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Specialized' className='nav-links'>Specialized</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Explore' className='nav-links'>Explore</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Support' className='nav-links'>Support</Link></li>
                    <li className='main-nav mt-4 mb-4'><Link to='/Buy' className='nav-links'>Where To Buy</Link></li>
                    <Link className='login-icon btn-dark text-decoration-none' to='/Login' style={{fontSize:"14px", margin:"0px 0px 16px 0px", height:"40px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"20px"}}>
             <GoPerson  style={{fontSize:"25px" ,margin:"0px 12px 0px 0px"}}/>
             Log in to DJI
             </Link>
                </ul>
    </div>
  </div>
  
</nav>

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div>
    </div>
  )
}

export default Navbar