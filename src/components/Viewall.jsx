import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [view, changeView] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:4000/viewall").then(
            (response) => {
                changeView(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar />
            .
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                view.map(
                                    (value, index) => {
                                        return (
                                            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">

                                                <div class="card">
                                                    <div class="card-header">
                                                        NAME: {value.name}
                                                    </div>
                                                    <div class="card-header">
                                                        AdmNo: {value.admno}
                                                    </div>
                                                    <div class="card-header">
                                                        Batch: {value.batch}
                                                    </div>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">Internal Mark: {value.total}</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        )

                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall