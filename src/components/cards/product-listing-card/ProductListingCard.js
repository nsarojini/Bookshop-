import React from "react";
import './productlistingCard.styles.css';
import ProductImage from '../../../assets/books-images/jungle-book.webp'

const ProductListingCard = () => {
    return (
       
        <div className="product-listing-card">
        <div className="product-listing-img-container">
          <img src={ProductImage } alt="product-listing-image"></img>
        </div>
        <div className="product-listing-details-container">
            <h3>The Jungle Book</h3>
            <p className="author-name">Rudyard</p>
            <p className="pricing">&#8377; 300</p>
            <a href ="#" className="product-listing-button">Button</a>
        </div>
        </div>
       
    )
}

export default ProductListingCard;