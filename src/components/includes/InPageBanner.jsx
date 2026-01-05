import React from 'react'

function InPageBanner() {
    const bgImage = {
        backgroundImage: "url('images/banner-ad-1.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
  return (
    <>
        <div className="banner-ad d-flex align-items-center large bg-info block-1 w-100 vh-50" style={bgImage}>
            {/* <img src="images/banner-ad-1.jpg" alt="" className="d-flex position-absolute w-100 h-100 top-0 left-0" /> */}
            <div className="banner-content p-5">
                <div className="content-wrapper text-light">
                <h3 className="banner-title text-light">Items on SALE</h3>
                <p>Discounts up to 30%</p>
                <a href="#" className="btn-link text-white">Shop Now</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default InPageBanner