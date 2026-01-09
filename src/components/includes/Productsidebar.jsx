import React from 'react'

function Productsidebar() {
  return (
    <>
        <aside class="col-md-2">
            <div class="sidebar">
              <div class="widget-menu">
                <div class="widget-search-bar">
                  <form role="search" method="get" class="d-flex position-relative">
                    
                      <input class="form-control form-control-lg rounded-2 bg-light" type="email" placeholder="Search here" aria-label="Search here" />
                      <button class="btn bg-transparent position-absolute end-0" type="submit"><svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg></button>
                    </form>
                  
                </div>
              </div>
              <div class="widget-product-categories pt-5">
                <h5 class="widget-title">Categories</h5>
                <ul class="product-categories sidebar-list list-unstyled">
                  <li class="cat-item">
                    <a href="/collections/categories" class="nav-link">All</a>
                  </li>
                  <li class="cat-item">
                    <a href="#" class="nav-link">Phones</a>
                  </li>
                  <li class="cat-item">
                    <a href="#" class="nav-link">Accessories</a>
                  </li>
                  <li class="cat-item">
                    <a href="#" class="nav-link">Tablets</a>
                  </li>
                  <li class="cat-item">
                    <a href="#" class="nav-link">Watches</a>
                  </li>
                </ul>
              </div>
              <div class="widget-product-tags pt-3">
                <h5 class="widget-title">Tags</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="#" class="nav-link">White</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">Cheap</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">Mobile</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">Modern</a>
                  </li>
                </ul>
              </div>
              <div class="widget-product-brands pt-3">
                <h5 class="widget-title">Brands</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="#" class="nav-link">Apple</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">Samsung</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">Huwai</a>
                  </li>
                </ul>
              </div>
              <div class="widget-price-filter pt-3">
                <h5 class="widget-titlewidget-title">Filter By Price</h5>
                <ul class="product-tags sidebar-list list-unstyled">
                  <li class="tags-item">
                    <a href="#" class="nav-link">Less than $10</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">$10- $20</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">$20- $30</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">$30- $40</a>
                  </li>
                  <li class="tags-item">
                    <a href="#" class="nav-link">$40- $50</a>
                  </li>
                </ul>
              </div>
            </div>
        </aside>
    </>
  )
}

export default Productsidebar