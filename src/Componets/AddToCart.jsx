import axios from 'axios';
import React, { useEffect } from 'react'

const AddToCart = () => {
      

    const Add=()=>{
        axios.get("http://localhost:3000/cart")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

    }
    useEffect(()=>{
        Add()
    },[])
  return (
    <div>
      h1
    </div>
  )
}

export default AddToCart
