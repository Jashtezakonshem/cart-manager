import React from 'react';

const Product = ({ product, onCartAdd }) => {
    let imageUrl =
        "https://www.pngkey.com/png/detail/212-2123376_erreur-404-png-error-404.png";
    if (product?.wcImages) {
        const parsedImages = JSON.parse(product.wcImages);
        if (parsedImages.length > 0) {
            imageUrl = parsedImages[0].src;
        }
    }
    return (
        <div className="product-card" key={product._id}>
            <img src={imageUrl} className="product-image" />
            <div className="product-info-container">
                <div>{product.name}</div>

                <button onClick={() => onCartAdd(product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;
