import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddToCart = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from the backend
  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cart");
      const cartProducts = response.data.map(product => ({
        ...product,
        qty: product.qty || 1 // Ensure qty is initialized properly
      }));
      setProducts(cartProducts);
      fetchCartData()

    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  // Remove product from the cart
  const removeProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      fetchCartData();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Update product quantity in the cart
  const updateQuantity = async (id, qty) => {
    try {
      await axios.patch(`http://localhost:3000/cart/${id}`, { qty });
      fetchCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Parse price from string
  const parsePrice = (price) => {
    const parsedPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    if (isNaN(parsedPrice)) {
      console.error(`Invalid price: ${price}`);
      return 0;
    }
    return parsedPrice;
  };

  // Calculate total items
  const calculateTotalItems = () => {
    let totalItems = 0;
    products.forEach(item => {
      totalItems += quantities[item.id] || item.qty;
    });
    return totalItems;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach(item => {
      const qty = quantities[item.id] || item.qty;
      const price = parsePrice(item.price);
      if (!isNaN(price) && !isNaN(qty)) {
        total += qty * price;
      }
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [products, quantities]);

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    const qty = parseInt(newQuantity, 10);
    if (isNaN(qty) || qty <= 0) {
      console.log(`Invalid quantity: ${newQuantity}`);
      return;
    }

    updateQuantity(productId, qty);
  };

  return (
      <div className="row justify-content-center m-0">
        <div className="col-10 mt-5 mb-5">
          <div className="card">
            <div className="card-header bg-dark p-3 pb-2">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation {products.length > 0 ? `(${products.length})` : ''}
                </h5>
              </div>
            </div>
            <div className="card-body p-0">
              {products.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan="6">
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="amount">Total Amount</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((data) => {
                      const { id, image, name, price, qty } = data;
                      const priceNumber = parsePrice(price);
                      const currentQty = quantities[id] || qty;
                      return (
                        <tr key={id}>
                          <td>
                            <button className="prdct-delete btn-danger" style={{outline:"none", padding:"3px", border:"none"}} onClick={() => removeProduct(id)}>
                              <i className="bi bi-trash3"></i>
                            </button>
                          </td>
                          <td style={{ width: "10%" }}>
                            <div className="product-img">
                              <img src={image} alt="" className='img-fluid w-75' />
                            </div>
                          </td>
                          <td>
                            <div className="product-name">
                              <p>{name}</p>
                            </div>
                          </td>
                          <td>
                            <div className="product-name">
                              <span>$</span>
                              <p className='d-inline'>{price}</p>
                            </div>
                          </td>
                          <td>
                            <div className="prdct-qty-container">
                              <div className="quantity-select">
                                <label htmlFor={`quantity-${id}`}>Qty:</label>
                                <select
                                  id={`quantity-${id}`}
                                  value={currentQty}
                                  onChange={(e) => handleQuantityChange(id, e.target.value)}
                                >
                                  {Array.from({ length: 10 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">${(currentQty * priceNumber).toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan="3">&nbsp;</th>
                      <th>
                        Total Items: {calculateTotalItems()}
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">$ {totalPrice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
            <div className="card-footer bg-dark text-white p-2 text-right">
              <button className="btn btn-success">
                Checkout (${totalPrice})
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddToCart;
