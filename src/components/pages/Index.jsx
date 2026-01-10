import React, { useEffect, useState } from 'react'
import Banner from '../includes/Banner'
import CategorySection from '../includes/CategorySection'
import ProductSection from '../includes/ProductSection'
import InPageBanner from '../includes/InPageBanner'
import ProductListItem from '../includes/ProductListItem'
import NewsLetter from '../includes/NewsLetter'
import axios from 'axios'

function Index() {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_productEndPoint+'/products')
    .then(res=>{
      console.log('rth--',res.data.products);
      
      setProducts(res.data.products);
    })
    .catch(err=>{
      console.log(err);
    });
  },[]);

  return (
    <>
      <Banner />
      <CategorySection />
      <ProductSection products={products} />
      <section className="py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">

              <div className="banner-blocks d-flex">
              
                <InPageBanner />

              </div>
                
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products" className="products-carousel">
        <div className="container-lg overflow-hidden py-5">
          <div className="row">
            <div className="col-md-12">

              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                
                <h2 className="section-title">Featured products</h2>

                <div className="d-flex align-items-center">
                  <a href="#" className="btn btn-primary me-2">View All</a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                    <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                  </div>  
                </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              <div className="swiper">
                <div className="swiper-wrapper">

                  {products.map((item,key) =>{
                    
                    return (
                      <>
                        <ProductListItem item={item} />
                      </>
                    )
                  })}
              </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

          </div>
        </div>
      </div>
    </section>

    <NewsLetter />

      {/* <section id="featured-products" className="products-carousel">
        <div className="container-lg overflow-hidden py-5">
          <div className="row">
            <div className="col-md-12">

              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                
                <h2 className="section-title">Most Popular products</h2>

                <div className="d-flex align-items-center">
                  <a href="#" className="btn btn-primary me-2">View All</a>
                  <div className="swiper-buttons">
                    <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                    <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                  </div>  
                </div>
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">

              <div className="swiper">
                <div className="swiper-wrapper">

                  {([6,1,2,5,8,4,46]).map((item,key) =>{
                    console.log('item-',item);
                    console.log('key-',key);
                    
                    return (
                      <>
                        <ProductListItem />
                      </>
                    )
                  })}
              </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

          </div>
          </div>
        </div>
      </section> */}

    <section class="pb-4 my-4">
      <div class="container-lg">

        <div class="bg-warning pt-5 rounded-5">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-md-4">
                <h2 class="mt-5">Download Organic App</h2>
                <p>Online Orders made easy, fast and reliable</p>
                <div class="d-flex gap-2 flex-wrap mb-5">
                  <a href="#" title="App store"><img src="images/img-app-store.png" alt="app-store" /></a>
                  <a href="#" title="Google Play"><img src="images/img-google-play.png" alt="google-play" /></a>
                </div>
              </div>
              <div class="col-md-5">
                <img src="images/banner-onlineapp.png" alt="phone" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <section class="py-4">
      <div class="container-lg">
        <h2 class="my-4">People are also looking for</h2>
        {
          ([,3,2,5,6,8,7]).map((item,key) =>{
            return (
              <>
                <a href="#" class="btn btn-warning me-2 mb-2">Blue diamon almonds</a>
              </>
            )
          })
        }
      </div>
    </section>
    
    <section class="py-5">
      <div class="container-lg">
        <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
          <div class="col">
            <div class="card mb-3 border border-dark-subtle p-3">
              <div class="text-dark mb-3">
                <svg width="32" height="32"><use xlink:href="#package"></use></svg>
              </div>
              <div class="card-body p-0">
                <h5>Free delivery</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Index