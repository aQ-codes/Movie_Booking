import React from 'react'
import checkAuthAdmin from "./auth/checkAuthAdmin"

function ListAnalytics() {
  return (
   
        
            <main className="content px-3 py-4">
                <div className="container-fluid">
                    <div className="mb-3">
                        <h3 className="fw-bold fs-4 mb-3">Dashboard</h3>
                        <div className="row">
                            <div className="col-12 col-md-4  ">
                                <div className="card border-0 card-color bg-primary" >
                                    <div className="card-body py-4 ">
                                        <h5 className="mb-2 fw-bold">
                                            Total Bookings
                                        </h5>
                                        <p className="mb-2 fw-bold">
                                            122
                                        </p>
                                        <div className="mb-0">
                                            <span className="badge text-success me-2">
                                                +9.0%
                                            </span>
                                            <span className=" fw-bold">
                                                 Last Month
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 ">
                                <div className="card bg-warning  border-0 card-color">
                                    <div className="card-body py-4">
                                        <h5 className="mb-2 fw-bold">
                                            Total Shows
                                        </h5>
                                        <p className="mb-2 fw-bold">
                                            35
                                        </p>
                                        <div className="mb-0">
                                            <span className="badge text-success me-2">
                                                +9.0%
                                            </span>
                                            <span className="fw-bold">
                                                Since Last Month
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 ">
                                <div className="card bg-info border-0 card-color">
                                    <div className="card-body py-4">
                                        <h5 className="mb-2 fw-bold">
                                            Estimated Earnings
                                        </h5>
                                        <p className="mb-2 fw-bold">
                                            Rs 72,540
                                        </p>
                                        <div className="mb-0">
                                            <span className="badge text-success me-2">
                                                +9.0%
                                            </span>
                                            <span className="fw-bold">
                                                Since Last Month
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="fw-bold fs-4 my-3">Latest Bookings
                        </h3>
                        <div className="row">
                            <div className="col-12">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className="highlight">
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
  )
}

export default checkAuthAdmin(ListAnalytics)
