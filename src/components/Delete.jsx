import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl 12">
                    <label htmlFor="" className="form-label">User id</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div>
                            <button className="btn btn-danger">DElete</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete