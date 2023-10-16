import './FeaturedProducts.scss';
import { Card } from '../Card/Card';
import { useState, useEffect } from 'react';
import  axios  from 'axios';
import useFetch from '../../hooks/useFetch'

export const FeaturedProducts = ({type}) => {

  const { products, loading, error } = useFetch(`http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`)
  

  console.log('featuredProduct is running')

  // const apiUrl = "http://localhost:1337/api";
 
  // `/products?populate=*&[filters][type][$eq]=${type}`
  

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
                      Now, you can use this ImageSlider component in your application and pass the images prop with an array of image URLs to display them in the slider with automatic sliding and navigation dots.
        </p>
      </div>
      <div className="bottom">
        {error ? "something went wrong" : loading ? "loading..." : products.map(( item) => (
          <Card item={item } key={item.id}/>
        ))}
      </div>
    </div>
  )
}