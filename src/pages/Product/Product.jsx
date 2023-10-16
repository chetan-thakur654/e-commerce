import './Product.scss';
import { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer'

export const Product = () => {

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const dispatch = useDispatch();
  
  const { products, loading, error } = useFetch(`http://localhost:1337/api/products/${id}?populate=*`);
  console.log(products)

  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img src={`http://localhost:1337` + products?.attributes?.img?.data?.attributes?.url} alt="image" onClick={e=>{setSelectedImg("img")}}/>
            <img src={`http://localhost:1337` + products?.attributes?.img2?.data?.attributes?.url} alt="image" onClick={e=>{setSelectedImg("img2")}}/>
          </div>
          <div className="mainImg">
            <img src={`http://localhost:1337` + products?.attributes?.[selectedImg]?.data?.attributes?.url}/>
          </div>
        </div>
        <div className="right">
          <h1>{products?.attributes?.title}</h1>
          <span className="price">${products?.attributes?.price}</span>
          <p>{products?.attributes?.desc}</p>
          <div className="quantity">
            <button onClick={e=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
            <button onClick={e=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className="add" onClick = {() => {
            dispatch(addToCart({
              id: products.id,
              title: products.attributes.title,
              desc: products.attributes.desc,
              price: products.attributes.price,
              quantity,
              img: `http://localhost:1337` + products.attributes.img.data.attributes.url
            }))
          }}>
            <AddShoppingCartIcon/> Add To Cart
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon/> Add To Wishlist
            </div>
            <div className="item">
              <BalanceIcon/> Add To Compare
            </div>
          </div>
          <div className="info">
            <span>Vandor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-shirt, Women, Shop</span>
          <hr />
          </div>
          <div className="details">
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </>
  )
}