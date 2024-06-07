import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Section3() {
    const imageStyle = {
        objectFit: 'cover'
    }

    return (
        <div className='container bg-body-tertiary p-5 my-5' id='review'>
            <div className='row'>
                    <h1> Informasi PPDB</h1>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className="card mb-3 my-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb 4.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb2.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="card mb-3 my-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb1.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb3.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require('../image/ppdb 4.jpg')} alt='' width={100} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h7 className="card-title">Card title</h7>
                                            <h7 className="card-text"></h7>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4  '>
                    <img
                        src={require('../image/ppdb5.jpg')}
                        className='img-fluid'
                        alt='...'
                    />
                </div>
            </div>
        </div>
    )
}

export default Section3;