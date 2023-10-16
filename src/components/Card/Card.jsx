import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({item}) => {
  const imgUrl = "http://localhost:1337";

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img src={"http://localhost:1337"+item.attributes?.img?.data?.attributes?.url} alt='image' className='mainImg'/>
          <img src={"http://localhost:1337"+item.attributes?.img2?.data?.attributes?.url} alt='image' className='secondImg'/>
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.oldPrize || item?.attributes.price + 25}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </Link>
  )
}