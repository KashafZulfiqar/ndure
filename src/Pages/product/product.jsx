import React from 'react'
import Navbar from '../../component/navbar'
import "./style.css"

export default function Product() {
  return (
    <div>
        <Navbar/>
        <div className="container-fluid">
            <div className="container p-0 m-0 py-3">
                <div className="col-lg-12">
                    <h2 className='px-3 pr_p1'>MEN SANDALS</h2>
                </div>
            </div>
            <div className="container py-3 ">
                <div className="col-lg-12 ">
                <div className="row justify-content-center " >
                <div className="col-lg-3  d-flex justify-content-around align-items-center">
                    <p className='mt-2' style={{fontWeight:"bold",fontSize:"0.8rem" }}>Refine by</p>
                    <div class="btn-group  w-75">
  <button type="button" className="btn pr_same border w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Price
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
                <div className="col-lg-3   d-flex justify-content-around align-items-center">
                <div class="btn-group   w-100">
  <button type="button" className="btn w-100 pr_same border px-5 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Size
  </button>
  <div className="dropdown-menu px-3 dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
                <div className="col-lg-3   d-flex justify-content-around align-items-center">
                <div class="btn-group w-100 d-flex justify-content-around">
  <button type="button" className="btn pr_same w-100 border dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Featured
  </button>
  <div className="dropdown-menu px-3 dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="container-fluid py-5 d-flex">
            <div className="col-lg-3 border border-dark d-flex justify-content-around">
                <div className="container border border-dark">1</div>
            </div>
            <div className="col-lg-3 border border-dark d-flex justify-content-around">
                <div className="container border border-dark">1</div>
            </div>
            <div className="col-lg-3 border border-dark d-flex justify-content-around">
                <div className="container border border-dark">1</div>
            </div>
            <div className="col-lg-3 border border-dark d-flex justify-content-around">
                <div className="container border border-dark">1</div>
            </div>
        </div>
    </div>
  )
}
