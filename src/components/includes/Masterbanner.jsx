import React from 'react'
import ProductSection from './ProductSection';
import ProductListItem from './ProductListItem';

function Masterbanner() {
    const MasterBannerImgStyle = {
        objectFit: 'cover',
        objectPosition: '50% 50%',
        maxWidth: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: 'transform, opacity'
    };
  return (
    <>
        <section className="jarallax py-5">
      
            <div className="hero-content py-0 py-md-5">
                <div className="container-lg d-flex flex-column d-md-block align-items-center">
                <nav className="breadcrumb">
                    <a className="breadcrumb-item nav-link" href="#">Home</a>
                    <a className="breadcrumb-item nav-link" href="#">Pages</a>
                    <span className="breadcrumb-item active" aria-current="page">Shop</span>
                </nav>
                <h1>Shop</h1>
                </div>
            </div>
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -100, clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'}} id="jarallax-container-0">
                <img src="/images/banner-1.jpg" className="jarallax-img" style={MasterBannerImgStyle} />
            </div>
        </section>
    </>
  )
}

export default Masterbanner