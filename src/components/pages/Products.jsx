import React from 'react'
import ProductListItem from '../includes/ProductListItem'

function Products() {
  return (
    <>
        <div className="container-lg my-5">
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
        </div>
    </>
  )
}

export default Products