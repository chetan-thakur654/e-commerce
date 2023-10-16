import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {

  const products = useSelector(state => state.cart.products) 
  const dispatch = useDispatch()

  const total = () => {
    let total = 0;
    products.forEach(item => total += item.quantity * item.price)
    return total;
  }

  const stripePromise = loadStripe('pk_test_51NzvBOSFnxEVF8PdF4NShZzFCIgrpTXSnsngqMDtwinlfwOHEsQbJ4pNsNBq9fUy9uqoUYM8IT9IBIDTiaLSYqDM00tcDV7oFx');
  
  const handlePayment = async() => {
    try {
     const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      
    } catch(err) {
      console.log(err)
    }
    
  }

  return (
    <div className="cart">
      <h1>Products in Your Cart</h1>
      {products?.map(item=>(
      <div className="item" key={item.id}>
        <img src={item.img} alt=""/>
        <div className="details">
          <h1>{item.title}</h1>
          {/* <p>{item.desc.substring(0,100)}</p> */}
          <div className="price">{item.quantity}*{item.price}</div>
        </div>
        <DeleteOutlinedIcon className="delete" onClick={() => {
          dispatch(removeItem(item.id))
        }}/>
      </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button onClick={handlePayment}>Proceed To Checkout</button>
      <span className="reset" onClick={() => {dispatch(resetCart())}}>Reset</span>
    </div>
  )
}