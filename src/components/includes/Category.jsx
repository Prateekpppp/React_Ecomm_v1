import React from 'react'

function Category(props) {
  return (
    <>
        <a href={props.anchor} className="nav-link swiper-slide text-center">
        <img src="images/category-thumb-1.jpg" className="rounded-circle" alt="Category Thumbnail" />
        <h4 className="fs-6 mt-3 fw-normal category-title">Fruits & Veges</h4>
        </a>
    </>
  )
}

export default Category