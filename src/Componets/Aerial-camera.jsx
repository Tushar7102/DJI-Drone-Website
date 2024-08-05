import React from 'react'
import { Link } from 'react-router-dom'

function Aerial() {
  return (
    <div>
        <div className='container-fluid areial-camera' style={{backgroundColor:"#F2F2F2"}}>
            <h1 className='text-center pt-5 pb-1' style={{fontSize:"40px", fontWeight:"500"}}>Camera Drones</h1>
            <p className='text-center' style={{fontSize:"16px"}}>Capture your moments from above <br/>
with a mini drone, FPV or professional <br/>
aerial camera</p>
  <div className='container p-5'>
  <div className='row'>
    <div className='col-12'>
    <div className="d-flex align-items-start row">
  <div className="nav flex-column nav-pills col-12 col-xl-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-areail-link active text-start ps-4" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">DJI Mavic Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">DJI Air Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">DJI Mini Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">DJI Avata Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Avata" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">DJI Inspire Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-six" type="button" role="tab" aria-controls="v-pills-six" aria-selected="false">DJI FPV Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-seven" type="button" role="tab" aria-controls="v-pills-seven" aria-selected="false">DJI Phantom Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-eight" type="button" role="tab" aria-controls="v-pills-eight" aria-selected="false">DJI Spark Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-nine" type="button" role="tab" aria-controls="v-pills-nine" aria-selected="false">DJI RC Series</button>
    <button className="nav-areail-link text-start ps-4" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-ten" type="button" role="tab" aria-controls="v-pills-ten" aria-selected="false">DJI Power Series</button>
  </div>
  <div className="tab-content col-9" id="v-pills-tabContent">
    <div className="tab-pane fade show active row" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
 <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div to=''><div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www3.djicdn.com/cms/uploads/ae5d8b9987be8d5ecdeb5d502a1e887c.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mavic 3 Pro</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>4/3 CMOS Hasselblad Camera | Dual Tele Cameras | <br/>  Cine Only Tri-Camera Apple ProRes Support | 43-Min Max Flight Time | Omnidirectional Obstacle Sensing | 15km HD Video Transmission</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div></div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/71e0d1acdf0f4ab35bf7de4eed250633.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mavic 3 Classic</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>4/3 CMOS Hasselblad Camera｜5.1K HD Video｜46-<br/> Min Max Flight Time｜Omnidirectional Obstacle <br/> Sensing｜15km HD Video Transmission｜Advanced <br/> RTH</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <p style={{fontSize:"12px", textAlign:"center", color:"##858585"}}>The following products are no longer available. Select product for support.</p>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www3.djicdn.com/cms/uploads/d83e1f401de17813728de586884952a1.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Mavic 3</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/ec98581df939cd4e91f5807837d889f5.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic 2</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/3157ec5f66e8968222412f5cf8a4410a.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic Pro</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www3.djicdn.com/cms/uploads/64ed2cf7919af2dcea67b652b0904a66.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic Pro Platinum</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/a656cc79725b55d02616072360469ffd.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Air 3</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Medium Tele & Wide-Angle Dual Primary Cameras | <br/> 46-Min Max Flight Time | Omnidirectional Obstacle <br/> Sensing | Dual-Camera 48MP Photos | Dual-Camera <br/> 4K/60fps HDR Videos | O4 HD Video Transmission</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <p style={{fontSize:"12px", textAlign:"center", color:"##858585"}}>The following products are no longer available. Select product for support.</p>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/2808f1b40ded0555f0378af97cd59a45.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Air 2S</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www1.djicdn.com/cms/uploads/c323a1ef546e5e8b8e15bac5974dc217.jpg' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic Air 2</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www1.djicdn.com/cms/uploads/3be8aaab8409e1575c6363658007b517.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic Air</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3'></div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/892e39b4b76dc5a83b267ed12ce69b97.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 4 Pro</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | 4K/60fps HDR True Vertical Shooting | <br/> Omnidirectional Obstacle Sensing | Extended Battery <br/> Life | 20km FHD Video Transmission | ActiveTrack <br/> 360°</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www3.djicdn.com/cms/uploads/7e215dd6f92a6178809776413bb3a476.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 3 Pro</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>The mini-sized, mega-capable DJI Mini 3 Pro is just as <br/> powerful as it is portable. Weighing less than 249g and <br/> with upgraded safety features, it's not only regulation- <br/> means to fly Mini.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/0e65b98eaee5cad6f74196e9594b99cd.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 3</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | Extended Battery Life | 4K HDR Video | <br/> True Vertical Shooting | Intelligent Features | 38kph <br/> (Level 5) Wind Resistance</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/019568d17fe5e90cac760a91a70b3c56.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 2 SE</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | Easy To Use | 10km Video Transmission | <br/> Intelligent Modes | 31-Min Max Flight Time | 38kph <br/> (Level 5) Wind Resistance</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <p style={{fontSize:"12px", textAlign:"center", color:"##858585"}}>The following products are no longer available. Select product for support.</p>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www3.djicdn.com/cms/uploads/c420db08ef0fe356cd929b1dca0d6af1.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Mini SE</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/9b130e2726d630ef93cfebf560607544.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Mini 2</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/f6a064721c7a86590248ea49e0d5df8b.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Mavic Mini</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
        </div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/6e82e273e1d05044bc6f02a278df51eb.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Avata 2</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Immersive Flight Experience | Intuitive Motion Control <br/> | Easy ACRO | Tight Shots in Super-Wide 4K | Built-In <br/> Propeller Guard | Hassle-Free POV Content</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www3.djicdn.com/cms/uploads/7e215dd6f92a6178809776413bb3a476.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 3 Pro</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>The mini-sized, mega-capable DJI Mini 3 Pro is just as <br/> powerful as it is portable. Weighing less than 249g and <br/> with upgraded safety features, it's not only regulation- <br/> means to fly Mini.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/0e65b98eaee5cad6f74196e9594b99cd.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 3</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | Extended Battery Life | 4K HDR Video | <br/> True Vertical Shooting | Intelligent Features | 38kph <br/> (Level 5) Wind Resistance</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/019568d17fe5e90cac760a91a70b3c56.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 2 SE</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | Easy To Use | 10km Video Transmission | <br/> Intelligent Modes | 31-Min Max Flight Time | 38kph <br/> (Level 5) Wind Resistance</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www2.djicdn.com/cms/uploads/019568d17fe5e90cac760a91a70b3c56.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Mini 2 SE</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Under 249 g | Easy To Use | 10km Video Transmission | <br/> Intelligent Modes | 31-Min Max Flight Time | 38kph <br/> (Level 5) Wind Resistance</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-Avata" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/133dbcbded142391e8ed57d0fcd57ac8.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Inspire 3</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Full-Frame 8K ProRes RAW/CDNG | 1/1.8-inch Ultra-<br/> Wide Night-Vision FPV Camera | Dual Aircraft Frame <br/> Configurations: Tilt Boost & 360° Pan | O3 Pro Video  <br/> Focus</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www3.djicdn.com/cms/uploads/170ea226d3b390170fa0114766b4af25.jpg'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>Inspire 2</h2>
                <p style={{fontSize:"14px", color:"#595959", height:"80px"}}>Cinematic aerial performance for filmmakers.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www5.djicdn.com/cms/uploads/8cbfd6d574da24bef2d08a50550edb33.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>Zenmuse X7</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>The Zenmuse X7 is a compact Super 35 camera with <br/> an integrated gimbal made for high-end filmmaking, <br/> delivering stunning resolution and image quality.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/e3b14ea513723a75e4a5cb01560603bb.jpg'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>Zenmuse X5S</h2>
                <p style={{fontSize:"14px", color:"#595959", height:"60px"}}>M4/3 camera that shoots 5.2K CinemaDNG and 4K <br/> Apple ProRes video.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www3.djicdn.com/cms/uploads/0bdfb8e7cdd75a1db9ad8e1e96bbc4f0.jpg' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Inspire 1 Pro/Raw</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/b4993d1e154efb1c2945d4c9a9ed6b54.jpg' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Inspire 1</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
        </div>
        <div className='col-3 p-2'>
        </div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-six" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='col-12'>
    <div className='row g-5 d-flex justify-content-between'>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www1.djicdn.com/cms/uploads/877f02933303036ab430c998d2eecf3d.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI O3 Air Unit</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>30 ms 10 km Digital Video Transmission｜<br/>1080p/100fps H.265 Video Transmission ｜4K/60fps <br/> Video｜155° Super-Wide FOV</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www1.djicdn.com/cms/uploads/25ce704882930264a4e733766e5eb1e4.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Digital FPV System</h2>
                <p style={{fontSize:"14px", color:"#595959", height:"80px"}}>We have redefined drone racing, delivering lower <br/> latency rates, stunning HD resolution, and, most <br/> importantly, an unforgettable FPV flying experience.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px" , height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/c2d80cfc937aef441cf77ec385663966.jpg'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI FPV</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>DJI FPV is a groundbreaking ready-to-fly FPV drone that <br/> lets users of any skill level feel the thrill of immersive <br/> flight. Features like an intuitive Motion Controller, <br/>  transmission, and 28ms low latency deliver a truly unrivaled aerial experience.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>

        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www4.djicdn.com/cms/uploads/f3e6cfddacfeb2cd1f1902f5091db013.png  ' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Goggles RE</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www3.djicdn.com/cms/uploads/ec3e6cd47a98f11fcddac827e0f4cf7d.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>DJI Goggles</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
        </div>
        <div className='col-3 p-2'>
        </div>
    </div>
 </div>
    </div>
    <div className="tab-pane fade" id="v-pills-seven" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='row g-5 d-flex justify-content-between'>
    <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www1.djicdn.com/cms/uploads/877f02933303036ab430c998d2eecf3d.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI O3 Air Unit</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>30 ms 10 km Digital Video Transmission｜<br/>1080p/100fps H.265 Video Transmission ｜4K/60fps <br/> Video｜155° Super-Wide FOV</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
        
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/cb613cc2670ea9eac555724395e6cff0.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 4 Pro</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www4.djicdn.com/cms/uploads/4be0e7a6e3c2e07fd0f5bfb2ab1c6e3f.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 4 Advanced</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www4.djicdn.com/cms/uploads/aa0daa444767864f09a2e1e5657a6efb.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 4</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/05c1f824f0ad343377ad02c3d6875eb0.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 3 Standard</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/558f81edfc6da7791db12c30f63938ff.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 3 SE</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www4.djicdn.com/cms/uploads/64f463a5b60cc684f3d0d6ac8df2a591.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 3 Advanced</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/31d49443c6f8f137c8ddeb2b5ca3f45f.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 3 Professional</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/ae48c5d452a03517205445e2c098f7d3.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 3 4K</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/629005b34910cc5f47b4d61b18e81b1f.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 2 Vision+</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www1.djicdn.com/cms/uploads/3fcb8ee5ba73bc5257dd8eacf823e24a.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 2 Vision</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/ad278cdcbb6bd1160b70073d1814732f.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 2</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/20e558105eb1306739ef525ba73352c5.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 1</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
    </div>
    </div>
    <div className="tab-pane fade" id="v-pills-eight" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='row g-5 d-flex justify-content-between'>
    <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www5.djicdn.com/cms/uploads/57d956b301aecf75338a7a6566ec1ce2.png' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Spark</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
    </div>
    </div>
    <div className="tab-pane fade" id="v-pills-nine" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='row g-5 d-flex justify-content-between'>
    <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/18fc13509a4909a5a8ee2bb3ae6d0dea.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI RC Motion 3</h2>
                <p style={{fontSize:"14px", color:"#595959", height:"70px"}}>Immersive Motion Control | Light, Portable, Ergonomic <br/> | AR Cursor | Stable Signal | Two-Stop Throttle</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www4.djicdn.com/cms/uploads/37e89f16becae05286caf4888a7c88b6.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI RC 2</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Next-Gen Processor | Quick Start | O4 Video <br/> Transmission | 2T4R Antennas | 5.5-inch FHD Screen | <br/> Light and Compact</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www3.djicdn.com/cms/uploads/14ebfa37f2242f3338211894d36e1ff9.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI RC Motion 2</h2>
                <p style={{fontSize:"14px", color:"#595959", height:"80px"}}>Immersive Motion Control | Multidirectional Operation | Multifunctional and Intuitive</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www1.djicdn.com/cms/uploads/bf281d2bdcc9ecb394c4dbc05473b980.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI O3 Air Unit</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>comfortable flying and supports the advanced DJI O3+ <br/> video transmission technology. With its powerful <br/> functionality, aerial creation is more convenient than <br/> ever.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www5.djicdn.com/cms/uploads/2f7d3f9049ab1e4d86379b3ad8402556.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI RC Pro</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>same control sticks as the DJI FPV drone to provide a <br/> smoother control experience, bringing aerial <br/> photography to new heights.</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>

        </div>
        <div className='col-3 p-2'>
            <div className='ps-4 pe-4 pt-3 pb-4' style={{backgroundColor:"white", textAlign:"center" ,borderRadius:"15px" }}>
                <img src='https://www2.djicdn.com/cms/uploads/74846848625d41aaec295748eb1c8b34.jpg' className='img-fluid w-75'></img>
                <h1 style={{fontSize:"16px", fontWeight:"600"}}>Phantom 1</h1>
                <Link className='btn' style={{backgroundColor:"#F0F0F0" ,padding:"5px 26px", borderRadius:"30px", marginTop:"15px"}}>Support</Link>
            </div>
        </div>
        </div>
    </div>
    <div className="tab-pane fade" id="v-pills-ten" role="tabpanel" aria-labelledby="v-pills-settings-tab">
    <div className='row g-5 d-flex justify-content-between'>
    <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www5.djicdn.com/cms/uploads/94f6aa88d89fb935ecd27498e42f343f.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Power 1000</h2>
                <p style={{fontSize:"14px", color:"#595959"}}> Undisturbed Indoors or Camping | Fast Charges DJI <br/> Drones | Fully Charged in 70 Mins | Comprehensive <br/> Safety | Supports Solar Charging | Extensive <br/> Accessories</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        <div className='col-6'>
            <div className='ps-4 pe-4 pt-5 pb-5' style={{backgroundColor:"white", textAlign:"center", borderRadius:"15px", height:"564px"}}>
                <img src='https://www5.djicdn.com/cms/uploads/670c93106708a03d3665316b08752e21.png'  className='img-fluid' style={{width:"75%"}}></img>
                <h2 style={{fontSize:"20px", fontWeight:"600"}}>DJI Power 500</h2>
                <p style={{fontSize:"14px", color:"#595959"}}>Sleep Undisturbed Indoors or Camping | Fast Charges <br/> DJI Drones | Comprehensive Safety | Fully Charged in <br/> 70 Mins | Supports Solar Charging | Extensive <br/> Accessories</p>
                <div className='d-flex justify-content-around'>
                    <Link className='btn-dark text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px"}}>Where to Buy</Link>
                    <Link className='btn text-decoration-none' style={{padding:"15px 30px", borderRadius:"30px", backgroundColor:"#F0F0F0"}}>Learn More</Link>
                </div>
            </div>
        </div>
        </div>
    </div>

  </div>
</div>
    </div>
</div>
  </div>
        </div>
    </div>
  )
}  

export default Aerial