import React from 'react'
import BannerContent from './BannerContent'

function Banner() {

    let bannerStyle = {
        backgroundImage: `url('images/banner-1.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return (
        <>
            
            <section className='banner' style={bannerStyle}>
            <div className="container-lg">
                <BannerContent />
            </div>
            </section>
        </>
    )
}

export default Banner