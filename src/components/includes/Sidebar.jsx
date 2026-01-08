import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">

        <div className="offcanvas-header justify-content-between">
            <h4 className="fw-normal text-uppercase fs-6">Menu</h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
        
            <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                <li className="nav-item border-dashed" data-bs-dismiss="offcanvas">
                    <Link to='/' className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                    {/* <a href="index.html" className="nav-link d-flex align-items-center gap-3 text-dark p-2"> */}
                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#fruits"></use></svg>
                    <span>Fruits and vegetables</span>
                    </Link>
                </li>
                <li className="nav-item border-dashed" data-bs-dismiss="offcanvas">
                    <Link to='/view/product' className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#dairy"></use></svg>
                    <span>Dairy and Eggs</span>
                    </Link>
                </li>
                <li className="nav-item border-dashed">
                    <button className="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2" data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
                    <div className="d-flex gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#beverages"></use></svg>
                        <span>Beverages</span>
                    </div>
                    </button>
                    <div className="collapse" id="beverages-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                        <li className="border-bottom py-2"><a href="index.html" className="dropdown-item">Water</a></li>
                        <li className="border-bottom py-2"><a href="index.html" className="dropdown-item">Juice</a></li>
                        <li className="border-bottom py-2"><a href="index.html" className="dropdown-item">Soda</a></li>
                        <li className="border-bottom py-2"><a href="index.html" className="dropdown-item">Tea</a></li>
                    </ul>
                    </div>
                </li>
                <li className="nav-item border-dashed">
                    <a href="index.html" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#spices"></use></svg>
                    <span>Spices and Seasonings</span>
                    </a>
                </li>
            </ul>
        
        </div>

        </div>
    </>
  )
}

export default Sidebar