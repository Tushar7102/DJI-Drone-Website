import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export function DroneProduct() {
    const[productdata,setproductdataa]=useState([])
    const descfunction=()=>{
        axios.get(`http://localhost:3000/products`)
        .then((res)=>{setproductdataa(res.data)})
        .catch((err)=>{console.log(err)})

    }
    useEffect(()=>{
        descfunction()
    },[])
  return (
    <div className='main-description'>
          <div className='container-fluid description'>
    <div className='row bg-white ms-0 m-2 me-0 me-xl-2'>
      <div className='col-12'>
        <div className='row'  style={{flexWrap:"nowrap", backgroundColor:"#d4d5d6"}}>
        <div className='col-2 d-none d-xl-block ms-0 mt-2 m-1 bg-white' style={{height:"auto"}}>
        <div className='row'>
          <div className='col-12 p-0'>
            <h2 style={{padding:"16px 16px 12px 16px", borderBottom:"1px solid #f0f0f0", fontSize:"18px", fontWeight:"500"}}>Filter</h2>
            <div style={{padding:"16px 16px 16px 16px", borderBottom:"1px solid #f0f0f0"}}>
              <Link style={{fontSize:"14px", color:"#878787", padding:"5px 0px" , display:"block", textDecoration:"none"}}>Camera & Accessories</Link>
              <Link style={{fontSize:"14px", color:"#878787", padding:"5px 0px", display:"block", textDecoration:"none"}}>Cameras</Link>
              <Link style={{fontSize:"14px", color:"#212121", fontWeight:"600", padding:"5px 0px", display:"block", textDecoration:"none"}}>Drones</Link>
            </div>
            <div style={{padding:"16px 16px 16px 16px", borderBottom:"1px solid #f0f0f0"}}>
              <div style={{fontSize:"14px", color:"#212121", fontWeight:"600", padding:"5px 0px", display:"block", textDecoration:"none"}}>PRICE</div>
              <input type="range" className='w-100'></input>
             <div className='row'>
              <div className='col-12'>
                <div className='row ms-1 me-1 d-flex justify-content-between'>
                <select className='col-5 product-option'>
                <option>Min</option>
                <option>9,99</option>
                <option>1,999</option>
                <option>2,999</option>
                <option>3,999</option>
                <option>4,499</option>
              </select>
              <span className='col-2'>To</span>
              <select className='col-5 product-option'>
                <option>4,999</option>
                <option>5,999</option>
                <option>6,499</option>
                <option>7,999</option>
                <option>8,999</option>
                <option>9,999</option>
                <option>50,999</option>
              </select>
                </div>
              </div>
             </div>
            </div>
            <div style={{padding:"16px 16px 16px 16px", borderBottom:"1px solid #f0f0f0"}}>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px", border:"1px solid"}}></input><span>AGRIBOT</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>AIElectro</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>BLR2</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>CLASSITOWILLA</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>DRwilla</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>Dainty</span></div>
            <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{width:"50px"}}></input><span>Ephemeral</span></div>
            </div>
            <div style={{padding:"0px 16px 0px 16px", borderBottom:"1px solid #f0f0f0",borderTop:"1px solid #f0f0f0"}}>
            <div className="accordion" id="accordionExample">
  <div>
    <h2 className="accordion-header" id="headingOne">
      <p className="discounte" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        DISCOUNT
      </p>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{ border:"1px solid"}}></input><span className='ps-3'>30% or more</span></div>
      <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{ border:"1px solid"}}></input><span className='ps-3'>20% or more</span></div>
      <div style={{color:"#212121", fontSize:"14px", display:"flex", alignItems:"center", padding:"5px 0px"}}><input type="checkbox" style={{ border:"1px solid"}}></input><span className='ps-3'>10% or more</span></div>      
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
     </div>
     <div className='col-12 col-xl-10 mt-2 bg-white'>
     {productdata.map((el)=>(
          <div key={el.id} style={{ width:"100%"}} className='col-12 mb-3 pt-3'>
          <Link to={`/descriptionmain/${el.id}`} className='row text-decoration-none pb-3'  style={{display:"flex", borderBottom:"1px solid #f0f0f0"}}>
            <div className='col-12 col-xl-2 d-flex justify-content-center'>
            <img src={el.image[0]} width={200} height={200} className='img-fluid'></img>
            {/* <i class="bi bi-heart-fill"></i> */}
            </div>
            <div className='col-12 col-xl-6'>
            <h1 className='desc-name'>{el.name}</h1>
            <p className='desc-type'>Type : {el.type}</p>
            <p className='desc-type'>Control Range : {el.range}</p>
            <p className='desc-type'>Control battery : {el.battery}</p>
            <p className='desc-type'>Weight : {el.weight}</p>
            </div>
            <div className='col-4' style={{textAlign:"start"}}>
                <h1 className='desc-price'>{el.price[0]}</h1>
                <div className='d-flex mb-2 align-items-center'>
                <del className='desc-price-del'>{el.price[1]}</del>
                <p className='ms-2 desc-off'>{el.off}Off</p>
                </div>
                <p className='desc-free'>Free delivery</p>
                <p className='desc-few'>Only few left</p>
            </div>
            </Link>
          </div>
          
      ))}
      
      

     </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}