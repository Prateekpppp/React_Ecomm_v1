import React from 'react'

function Productsidebar() {
  return (
    <>
        <aside className="col-md-2">
            <div className="sidebar">
              <div className="widget-menu">
                <div className="widget-search-bar">
                  <form role="search" method="get" className="d-flex position-relative">
                    
                      <input className="form-control form-control-lg rounded-2 bg-light" type="email" placeholder="Search here" aria-label="Search here" />
                      <button className="btn bg-transparent position-absolute end-0" type="submit"><svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg></button>
                    </form>
                  
                </div>
              </div>
              <div className="widget-product-categories pt-5">
                <h5 className="widget-title">Categories</h5>
                <ul className="product-categories sidebar-list list-unstyled">
                  <li className="cat-item">
                    <a href="/collections/categories" className="nav-link">All</a>
                  </li>
                  <li className="cat-item">
                    <a href="#" className="nav-link">Phones</a>
                  </li>
                  <li className="cat-item">
                    <a href="#" className="nav-link">Accessories</a>
                  </li>
                  <li className="cat-item">
                    <a href="#" className="nav-link">Tablets</a>
                  </li>
                  <li className="cat-item">
                    <a href="#" className="nav-link">Watches</a>
                  </li>
                </ul>
              </div>
              <div className="widget-product-tags pt-3">
                <h5 className="widget-title">Tags</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="#" className="nav-link">White</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">Cheap</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">Mobile</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">Modern</a>
                  </li>
                </ul>
              </div>
              <div className="widget-product-brands pt-3">
                <h5 className="widget-title">Brands</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="#" className="nav-link">Apple</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">Samsung</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">Huwai</a>
                  </li>
                </ul>
              </div>
              <div className="widget-price-filter pt-3">
                <h5 className="widget-titlewidget-title">Filter By Price</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <a href="#" className="nav-link">Less than $10</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">$10- $20</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">$20- $30</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">$30- $40</a>
                  </li>
                  <li className="tags-item">
                    <a href="#" className="nav-link">$40- $50</a>
                  </li>
                </ul>
              </div>
            </div>
        </aside>
    </>
  )
}

export default Productsidebar