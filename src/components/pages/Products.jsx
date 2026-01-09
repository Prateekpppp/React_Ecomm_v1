import React from 'react'
import ProductListItem from '../includes/ProductListItem'
import Productsidebar from '../includes/Productsidebar'

function Products() {
  return (
    <>
        <div className="container-lg my-5">
            <div className="row">
                <Productsidebar />
                <div className="col-md-10">
                    <div className="filter-shop d-flex justify-content-between">
                        <div className="showing-product">
                            <p>Showing 1–10 of 25 results</p>
                        </div>
                        <div className="sort-by">
                            <select id="input-sort" className="form-control" data-filter-sort="" data-filter-order="">
                            <option value="">Default sorting</option>
                            <option value="">Name (A - Z)</option>
                            <option value="">Name (Z - A)</option>
                            <option value="">Price (Low-High)</option>
                            <option value="">Price (High-Low)</option>
                            <option value="">Rating (Highest)</option>
                            <option value="">Rating (Lowest)</option>
                            <option value="">Model (A - Z)</option>
                            <option value="">Model (Z - A)</option>   
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {
                            ([1, 3, 7, 5, 6]).map((item, key) => (
                                <>
                                    <div className="col-sm-4 px-1 mb-2" key={key}>
                                        <ProductListItem />
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <nav className="text-center py-5 my-5" aria-label="Page navigation">
                        <ul className="pagination d-flex justify-content-center">
                            <li className="page-item disabled">
                            <a className="page-link bg-none border-0" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                            </li>
                            <li className="page-item active" aria-current="page"><a className="page-link border-0" href="#">1</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
                            <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link border-0" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products