import React from 'react'

function Cart_total() {
  return (
    <>
      <div className="cart-totals bg-grey py-5">
        <h4 className="text-dark pb-4">Cart Total</h4>
        <div className="total-price pb-5">
          <table cellspacing="0" className="table text-uppercase">
            <tbody>
              <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                <th>Subtotal</th>
                <td data-title="Subtotal">
                  <span className="price-amount amount text-dark ps-5">
                    <bdi>
                      <span className="price-currency-symbol">$</span>370.00
                    </bdi>
                  </span>
                </td>
              </tr>
              <tr className="order-total pt-2 pb-2 border-bottom">
                <th>Total</th>
                <td data-title="Total">
                  <span className="price-amount amount text-dark ps-5">
                    <bdi>
                      <span className="price-currency-symbol">$</span>370.00</bdi>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="button-wrap row g-2">
          <div className="col-md-6"><button className="btn btn-dark py-3 px-4 text-uppercase btn-rounded-none w-100">Update
              Cart</button></div>
          <div className="col-md-6"><button className="btn btn-dark py-3 px-4 text-uppercase btn-rounded-none w-100">Continue Shopping</button></div>
          <div className="col-md-12"><button className="btn btn-primary py-3 px-4 text-uppercase btn-rounded-none w-100">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart_total