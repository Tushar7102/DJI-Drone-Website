import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Description() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [singlePageData, setSinglePageData] = useState(null); // Updated initial state
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setSinglePageData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const AddToCart = async () => {
    try {
      // Check if the product already exists in the cart
      const cartRes = await axios.get("http://localhost:3000/cart");
      const existingProduct = cartRes.data.find(item => item.id === singlePageData.id);
      
      if (existingProduct) {
        // Update the quantity if the product already exists
        await axios.put(`http://localhost:3000/cart/${existingProduct.id}`, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
          price: singlePageData.price[0] // Ensure the price is consistent
        });
      } else {
        // Add the new product if it does not exist
        const newProduct = {
          id: singlePageData.id,
          name: singlePageData.name,
          image: singlePageData.image,
          type: singlePageData.type,
          range: singlePageData.range,
          price: singlePageData.price[0],
          quantity: 1
        };
        await axios.post("http://localhost:3000/cart", newProduct);
      }
      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  if (!singlePageData) return null;

  const images = singlePageData.image || [];
  const price = singlePageData.price ? singlePageData.price[0] : '';
  const price2 = singlePageData.price && singlePageData.price[1] ? singlePageData.price[1] : '';

  return (
    <div className='main-description'>
          <div className='description container-fluid'>
      <div className='ms-1 me-1 mb-0 row bg-white'>
        <div className="slideshow-container col-12 col-xl-5 d-flex justify-content-center">
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
        <div className='col-12 col-xl-7 ps-2 pe-2 pt-4 pe-4'>
          <h1 style={{ fontSize: "18px", fontWeight: "600", paddingBottom: "20px" }}>{singlePageData.name}</h1>
          <div className='row d-flex align-items-center'>
            <div className='col-12 col-xl-4'>
              <p style={{ fontSize: "14px", color: "#388E3C", fontWeight: "600" }}>{singlePageData.off} off</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "28px", fontWeight: "500", padding: "0px 10px 0px 0px" }}>{price}</span>
                {price2 && <del style={{ fontSize: "16px", fontWeight: "500", padding: "0px 10px 0px 0px", color: "#878787" }}>{price2}</del>}
              </div>
            </div>
            <div className='col-12 col-xl-7 d-flex justify-content-center justify-content-xl-between'>
              <Link to='/AddToCart' onClick={AddToCart} className='addcartbtn' style={{ }}>ADD TO CART</Link>
              <Link to='' className='buybtn' style={{ }}>BUY NOW</Link>
            </div>
          </div>
          <div style={{ padding: "20px 0px" }}>
            <div style={{ padding: "0px 0px 15px 0px", fontWeight: "600" }}>Available offers :-</div>
          </div>
          <div className='row'>
            <div className='col-12 col-xl-6'>
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
            <div className='col-12 col-xl-6'>
              <div className='row'>
                <div className='col-2' style={{ color: "#878787", fontWeight: "600", fontSize: "14px" }}>Services</div>
                <ul className='col-10 list-unstyled'>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121", display: "flex", alignItems:"center" }}>
                    <img className='img-fluid' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{ width: "5%", height:"5%" }} alt='service icon' />
                    7 Days Replacement Policy
                  </li>
                  <li className='ms-5' style={{ fontSize: "14px", color: "#212121", display: "flex",alignItems:"center"  }}>
                    <img className='img-fluid' src='https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90' style={{ width: "5%", height:"5%"  }} alt='service icon' />
                    1 Year Warranty
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Description;
