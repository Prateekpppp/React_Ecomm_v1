import React from 'react'
import Cart_item from './Cart_item'
import Cart_total from './Cart_total'

function Cart() {
  return (
    <>
      <section className="py-5">
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-md-8">

              <div className="table-responsive cart">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="card-title text-uppercase text-muted">Product</th>
                      <th scope="col" className="card-title text-uppercase text-muted">Quantity</th>
                      <th scope="col" className="card-title text-uppercase text-muted">Subtotal</th>
                      <th scope="col" className="card-title text-uppercase text-muted"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Cart_item/>
                  </tbody>
                </table>
              </div>
              
            </div>
            <div className="col-md-4">
              <Cart_total/>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Cart