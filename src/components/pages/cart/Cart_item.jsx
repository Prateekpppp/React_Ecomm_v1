import React from 'react'

function Cart_item() {
  return (
    <>
      <tr>
        <td scope="row" className="py-4">
          <div className="cart-info d-flex flex-wrap align-items-center">
            <div className="col-lg-3">
              <div className="card-image">
                <img src="/images/product-thumb-12.png" alt="product" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card-detail ps-3">
                <h5 className="card-title">
                  <a href="#" className="text-decoration-none">Product Name 2</a>
                </h5>
              </div>
            </div>
          </div>
        </td>
        <td className="py-4">
          <div className="input-group product-qty w-50">
            <span className="input-group-btn">
              <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                <svg width="16" height="16">
                  <use xlinkHref="#minus"></use>
                </svg>
              </button>
            </span>
            <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" />
            <span className="input-group-btn">
              <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                <svg width="16" height="16">
                  <use xlinkHref="#plus"></use>
                </svg>
              </button>
            </span>
          </div>
        </td>
        <td className="py-4">
          <div className="total-price">
            <span className="money text-dark">$70.00</span>
          </div>
        </td>
        <td className="py-4">
          <div className="cart-remove">
            <a href="#">
              <svg width="24" height="24">
                <use xlinkHref="#trash"></use>
              </svg>
            </a>
          </div>
        </td>
      </tr>
    </>
  )
}

export default Cart_item