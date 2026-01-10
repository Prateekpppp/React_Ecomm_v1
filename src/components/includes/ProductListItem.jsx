import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductListItem({item}) {
    
    // const [item,setItem] = useState(item);
    if(!item){
        return 'No data';
    }
  return (
    <>
        <div className="product-item swiper-slide">
            <figure>
            <Link to={`/view/product/${item.id}`} title="Product Title">
                {/* <img src="/images/product-thumb-1.png" alt="Product Thumbnail" className="tab-image" /> */}
                <img src={item.images[0]} alt="Product Thumbnail" className="tab-image" />
            </Link>
            </figure>
            <div className="d-flex flex-column text-center">
            <h3 className="fs-6 fw-normal">Whole Wheat Sandwich Bread</h3>
            <div>
                <span className="rating">
                <svg width="18" height="18" className="text-warning"><use xlink:href="#star-full"></use></svg>
                <svg width="18" height="18" className="text-warning"><use xlink:href="#star-full"></use></svg>
                <svg width="18" height="18" className="text-warning"><use xlink:href="#star-full"></use></svg>
                <svg width="18" height="18" className="text-warning"><use xlink:href="#star-full"></use></svg>
                <svg width="18" height="18" className="text-warning"><use xlink:href="#star-half"></use></svg>
                </span>
                <span>(222)</span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
                <del>$24.00</del>
                <span className="text-dark fw-semibold">$18.00</span>
                <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
            </div>
            <div className="button-area p-3 pt-0">
                <div className="row g-1 mt-2">
                <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                <div className="col-7"><a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlink:href="#cart"></use></svg> Add to Cart</a></div>
                <div className="col-2"><a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlink:href="#heart"></use></svg></a></div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ProductListItem