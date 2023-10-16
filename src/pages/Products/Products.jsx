import './Products.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../../components/List/List';
import useFetch  from '../../hooks/useFetch';

export const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrize, setMaxPrize] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const { products, loading, error } = useFetch(`http://localhost:1337/api/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    // console.log(value,isChecked)
    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item => item != value))
  }

  console.log(selectedSubCats)


  return (
    <>
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {products.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter By Prize</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange = {(e) => { setMaxPrize(e.target.value)}}/>
              <span>{maxPrize}</span>
              
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input type='radio' id='asc' value='asc' name="prize" onChange={e => setSort('asc')}/>
              <label htmlFor="asc">Prize (Lowest Prize)</label>
            </div>
            <div className="inputItem">
              <input type='radio' id='desc' value='desc' name="prize" onChange={e => setSort('desc')}/>
              <label htmlFor="asc">Prize (Highest Prize)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="" className="catImg"/>
          <List catId={catId} maxPrize={maxPrize} sort={sort} subCats={selectedSubCats} />
        </div>
        
      </div>
    </>
  )
}