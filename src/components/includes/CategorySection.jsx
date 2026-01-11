import React from 'react'
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

function CategorySection() {
  return (
        <>
            <section className="py-5 overflow-hidden">
                <div className="container-lg">
                    <div className="row">
                    <div className="col-md-12">

                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                        <h2 className="section-title">Category</h2>

                        <div className="d-flex align-items-center">
                            <a href="#" className="btn btn-primary me-2">View All</a>
                            <div className="swiper-buttons">
                            <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                            <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">

                        <div className="category-carousel swiper">
                            <div className="swiper-wrapper">
                                <Link to='/view/products' className="nav-link swiper-slide text-center">
                                <img src="images/category-thumb-1.jpg" className="rounded-circle" alt="Category Thumbnail" />
                                <h4 className="fs-6 mt-3 fw-normal category-title">All Products</h4>
                                </Link>
                                {/* </a> */}
                                <Link to='/view/products/beauty' className="nav-link swiper-slide text-center">
                                <img src="images/category-thumb-1.jpg" className="rounded-circle" alt="Category Thumbnail" />
                                <h4 className="fs-6 mt-3 fw-normal category-title">Beauty</h4>
                                </Link>
                                
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategorySection