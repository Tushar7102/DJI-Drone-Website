// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// function Description() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [singlePageData, setSinglePageData] = useState(null);
//   const { id } = useParams();
//   const initizise={id,name,type,range,price}
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3000/products/${id}`);
//       setSinglePageData(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const AddToCart=()=>{
//     axios.post("http://localhost:3000/cart",initizise)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.error(error));
//   }

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   const changeSlide = (index) => {
//     setActiveIndex(index);
//   };

//   if (!singlePageData) return null;

//   const images = singlePageData.image || [];
//   const price = singlePageData.price[0] ;
//   const price2 = singlePageData.price[1] || [];

//   return (
//     <div className='description container-fluid'>
//       <div className='ms-1  me-1 mb-0 row bg-white'>
//         <div className="slideshow-container col-5">
//           <div id="lens" ></div>
//           <div id="result" ></div>
//           <div className="row">
//             <div className='col-12'>
//               {images.map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   className={`slideshow-thumbnails ${index === activeIndex ? 'active' : ''} img-fluid`}
//                   onClick={() => changeSlide(index)}
//                   alt=""
//                 />
//               ))}
//             </div>
//           </div>
//           <div id="slideshow-items-container">
//             {images.map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 className={`slideshow-items ${index === activeIndex ? 'active' : ''} img-fluid`}
//                 alt=""
//               />
//             ))}
//           </div>
//         </div>
//         <div className='col-7 ps-2 pe-2 pt-4 pe-4'>
//         <h1 style={{fontSize:"18px", fontWeight:"600", paddingBottom:"20px"}}>{singlePageData.name}</h1>
//           <div className='row d-flex align-items-center '>
//             <div className='col-4'>
//           <p style={{fontSize:"14px", color:"#388E3C", fontWeight:"600"}}>{singlePageData.off} off</p>
//           <div style={{display:"flex", alignItems:"center"}}>
//             <span style={{fontSize:"28px", fontWeight:"500", padding:"0px 10px 0px 0px"}}>{price}</span>
//             <del style={{fontSize:"16px", fontWeight:"500", padding:"0px 10px 0px 0px", color:"#878787"}}>{price2}</del>
//           </div>
//           </div>
//           <div className='col-7 d-flex justify-content-between'>
//             <Link to='' onClick={AddToCart} style={{padding:"15px 60px", backgroundColor:"#212121", textDecoration:"none", color:"white"}}>ADD TO CART</Link>
//             <Link to='' style={{padding:"15px 60px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", textDecoration:"none", color:"black"}}>BUY NOW</Link>
//           </div>
//           </div>
//           {/* <div style={{marginTop:"10px"}}>{singlePageData.function}</div> */}
//           <div style={{padding:"20px 0px"}}>
//           <div style={{padding:"0px 0px 15px 0px", fontWeight:"600"}}>Available offers :-</div>
//           <p style={{fontSize:"14px", marginBottom:"8px"}}><img src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{width:"2%"}}></img> <strong>Partner Offer</strong> <span style={{color:"#878787"}}>Make a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</span> <Link to=''>Know More</Link></p>
//           <p style={{fontSize:"14px", marginBottom:"8px"}}><img src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{width:"2%"}}></img> <strong>Bank Offer</strong> <span style={{color:"#878787"}}>Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above</span> <Link to=''>T&C</Link></p>
//           <p style={{fontSize:"14px", marginBottom:"8px"}}><img src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{width:"2%"}}></img> <strong>Bank Offer</strong> <span style={{color:"#878787"}}>Flat ₹1000 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹15,000</span><Link to=''>T&C</Link></p>
//           <p style={{fontSize:"14px", marginBottom:"8px"}}><img src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{width:"2%"}}></img> <strong>Bank Offer</strong> <span style={{color:"#878787"}}>Flat ₹1250 off on HDFC Bank Credit Card EMI Txns, Tenure: 12 and 18 months, Min Txn Value: ₹15,000</span><Link to=''>T&C</Link></p>
//           </div>

//           <div className='row'>
//             <div className='col-6'>
//               <div className='row'>
//                 <div className='col-2' style={{color:"#878787", fontWeight:"600", fontSize:"14px"}}>Highlights</div>
//                 <ul className='col-10'>
//                   <li className='ms-5' style={{fontSize:"14px", color:"#212121"}}>Type: {singlePageData.type}</li>
//                   <li className='ms-5' style={{fontSize:"14px", color:"#212121"}}>Control Range: {singlePageData.range}</li>
//                   <li className='ms-5' style={{fontSize:"14px", color:"#212121"}}>Battery Type: {singlePageData.battery}</li>
//                   <li className='ms-5' style={{fontSize:"14px", color:"#212121"}}>Type: {singlePageData.type}</li>
//                 </ul>
//               </div>
//             </div>
//             <div className='col-6'>
//               <div className='row'>
//                 <div className='col-2' style={{color:"#878787", fontWeight:"600", fontSize:"14px"}}>Services</div>
//                 <ul className='col-10 list-unstyled'>
//                   <li className='ms-5' style={{fontSize:"14px", color:"#212121", display:"flex"}}><img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgLjc1bC02Ljc1IDN2NC41YzAgNC4xNjIgMi44OCA4LjA1NSA2Ljc1IDkgMy44Ny0uOTQ1IDYuNzUtNC44MzggNi43NS05di00LjVMNyAuNzV6bS0xLjUgMTJsLTMtMyAxLjA1OC0xLjA1N0w1LjUgMTAuNjI3bDQuOTQzLTQuOTQyTDExLjUgNi43NWwtNiA2eiIgZmlsbD0iIzIxNzVGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+' className='img-fluid' style={{width:"6%"}}></img> <p className='d-inline-block mb-0 ps-2'>NO WARRANTY</p></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='d-flex'>
//             <div className=''style={{color:"#878787", fontWeight:"600", fontSize:"14px"}}>Description</div>
//             <div className='ms-3' style={{fontSize:"14px", color:"#212121"}}>{singlePageData.description}</div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Description;


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Description() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [singlePageData, setSinglePageData] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setSinglePageData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const AddToCart = () => {
    const initizise = {
      id: singlePageData.id,
      name: singlePageData.name,
      type: singlePageData.type,
      range: singlePageData.range,
      price: singlePageData.price[0]
    };
    
    axios.post("http://localhost:3000/cart", initizise)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  if (!singlePageData) return null;

  const images = singlePageData.image || [];
  const price = singlePageData.price ? singlePageData.price[0] : [];
  const price2 = singlePageData.price ? singlePageData.price[1] : [];

  return (
    <div className='description container-fluid'>
      <div className='ms-1 me-1 mb-0 row bg-white'>
        <div className="slideshow-container col-5">
          <div id="lens"></div>
          <div id="result"></div>
          <div className="row">
            <div className='col-12'>
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className={`slideshow-thumbnails ${index === activeIndex ? 'active' : ''} img-fluid`}
                  onClick={() => changeSlide(index)}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div id="slideshow-items-container">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className={`slideshow-items ${index === activeIndex ? 'active' : ''} img-fluid`}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className='col-7 ps-2 pe-2 pt-4 pe-4'>
          <h1 style={{ fontSize: "18px", fontWeight: "600", paddingBottom: "20px" }}>{singlePageData.name}</h1>
          <div className='row d-flex align-items-center'>
            <div className='col-4'>
              <p style={{ fontSize: "14px", color: "#388E3C", fontWeight: "600" }}>{singlePageData.off} off</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "28px", fontWeight: "500", padding: "0px 10px 0px 0px" }}>{price}</span>
                {price2 && <del style={{ fontSize: "16px", fontWeight: "500", padding: "0px 10px 0px 0px", color: "#878787" }}>{price2}</del>}
              </div>
            </div>
            <div className='col-7 d-flex justify-content-between'>
              <Link to='/AddToCart' onClick={AddToCart} style={{ padding: "15px 60px", backgroundColor: "#212121", color: "white", border: "none", textDecoration:"none"}}>ADD TO CART</Link>
              <Link to='' style={{ padding: "15px 60px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", border: "none", backgroundColor: "white", color: "black" , textDecoration:"none"}}>BUY NOW</Link>
            </div>
          </div>
          <div style={{ padding: "20px 0px" }}>
            <div style={{ padding: "0px 0px 15px 0px", fontWeight: "600" }}>Available offers :-</div>
            {singlePageData.offers && singlePageData.offers.map((offer, index) => (
              <p key={index} style={{ fontSize: "14px", marginBottom: "8px" }}>
                <img src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{ width: "2%" }} alt='offer icon' />
                <strong>{offer.title}</strong>
                <span style={{ color: "#878787" }}> {offer.description}</span>
                <Link  to=''>Know More</Link>
              </p>
            ))}
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-2' style={{ color: "#878787", fontWeight: "600", fontSize: "14px" }}>Highlights</div>
                <ul className='col-10'>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121" }}>Type: {singlePageData.type}</li>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121" }}>Control Range: {singlePageData.range}</li>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121" }}>Battery Type: {singlePageData.battery}</li>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121" }}>Type: {singlePageData.type}</li>
                </ul>
              </div>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-2' style={{ color: "#878787", fontWeight: "600", fontSize: "14px" }}>Services</div>
                <ul className='col-10 list-unstyled'>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121", display: "flex" }}>
                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgLjc1bC02Ljc1IDN2NC41YzAgNC4xNjIgMi44OCA4LjA1NSA2Ljc1IDkgMy44Ny0uOTQ1IDYuNzUtNC44MzggNi43NS05di00LjVMNyAuNzV6bS0uIDBsLTMtMyAxLjA1OC0xLjA1N0w1LjUgMTAuNjI3bDQuOTQzLTQuOTQyTDExLjUgNi43NWwtNiA2eiIgZmlsbD0iIzIxNzVGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+' className='img-fluid' style={{ width: "6%" }} alt='warranty icon' />
                    <p className='d-inline-block mb-0 ps-2'>NO WARRANTY</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div style={{ color: "#878787", fontWeight: "600", fontSize: "14px" }}>Description</div>
            <div className='ms-3' style={{ fontSize: "14px", color: "#212121" }}>{singlePageData.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
