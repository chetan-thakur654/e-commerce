import './List.scss';
import { Card } from '../Card/Card';
import useFetch from '../../hooks/useFetch'

export const List = ({catId, maxPrize, sort, subCats}) => {
  console.log(sort)

  const {products, loading, error } = useFetch(`http://localhost:1337/api/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrize}`
  );

  console.log(products)

  return (
    <div className="list">
      {loading ? "loading...": error ? "Ooops ! something went wrong" : 
       products?.map(item => (
      <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}