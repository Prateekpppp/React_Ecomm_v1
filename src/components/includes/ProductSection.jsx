import React from 'react'
import ProductListItem from './ProductListItem'

function ProductSection() {
  return (
    <>
      <section className="pb-5">
        <div className="container-lg">

          <div className="row">
            <div className="col-md-12">

              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                
                <h2 className="section-title">Best selling products</h2>

                <div className="d-flex align-items-center">
                  <a href="#" className="btn btn-primary rounded-1">View All</a>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">

              <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    
                <div className="col">
                  <ProductListItem />
                </div>
                
                <div className="col">
                  <ProductListItem />
                </div>
                
                <div className="col">
                  <ProductListItem />
                </div>
                <div className="col">
                  <ProductListItem />
                </div>
                <div className="col">
                  <ProductListItem />
                </div>
                <div className="col">
                  <ProductListItem />
                </div>
                <div className="col">
                  <ProductListItem />
                </div>
                <div className="col">
                  <ProductListItem />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>    
  )
}

export default ProductSection