import React, { useEffect, useState } from 'react'
import ProductListItem from '../includes/ProductListItem'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Product() {
    const {id} = useParams();
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        console.log('436');
        
        axios.get(import.meta.env.VITE_productEndPoint+'/product/'+id)
        .then(res=>{
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
            
        });
    },[]);

    // if(!data.length){
    //     return 'No Data Found';
    // }
  return (
    <>

        <main className="mt-5 pt-4">
            <div className="container mt-5">
                
                <div className="row">
                    
                    <div className="col-md-6 mb-4">
                        <img src={data.images?data.images[0]:''} className="img-fluid" alt="" />
                    </div>
                    

                    
                    <div className="col-md-6 mb-4">
                        
                        <div className="p-4">
                            <div className="mb-3">
                                <a href="">
                                    <span className="badge bg-dark me-1">Category 2</span>
                                </a>
                                <a href="">
                                    <span className="badge bg-info me-1">New</span>
                                </a>
                                <a href="">
                                    <span className="badge bg-danger me-1">Bestseller</span>
                                </a>
                            </div>

                            <p className="lead">
                                <span className="me-1">
                                    <del>$200</del>
                                </span>
                                <span>$100</span>
                            </p>

                            <strong><p style={{fontSize: '20px'}}>{data.title}</p></strong>

                            <p>{data.description}</p>

                            <form className="d-flex justify-content-left">
                                
                                <div className="form-outline me-1" style={{width: '100px'}}>
                                    <input type="number" value={data.stock} className="form-control" />
                                </div>
                                <button className="btn btn-primary ms-1" type="submit">
                                    Add to cart
                                    <i className="fas fa-shopping-cart ms-1"></i>
                                </button>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
                

                <hr />

                
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-md-6 text-center">
                        <h4 className="my-4 h4">Additional information</h4>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
                    </div>
                    
                </div>
                

                
                <div className="row">
                    
                    <div className="col-lg-4 col-md-12 mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
                    </div>
                    

                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
                    </div>
                    

                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
                    </div>
                    
                </div>
                
            </div>
        </main>
    
        {/* <div className="container-lg my-5">
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
        </div> */}
    </>
  )
}

export default Product