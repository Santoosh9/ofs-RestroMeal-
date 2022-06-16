import React from 'react'

function Card() {
    return (
        <>
            <di className="container-fluid">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="../Images/img4.png" className="card-img-top" alt="..." width="100px " height="250px" />
                            <div className="card-body">
                                <h5 className="card-title">Spical Egg</h5>
                                <p>The flavor of your food is what most customers focus on when they are deciding what to eat. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="../Images/img5.jpeg" className="card-img-top" alt="..." width="100px " height="250px" />
                            <div className="card-body">
                                <h5 className="card-title">Khana Set</h5>
                                <p>The flavor of your food is what most customers focus on when they are deciding what to eat. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="../Images/img6.jpg" className="card-img-top" alt="..." width="100px " height="250px" />
                            <div className="card-body">
                                <h5 className="card-title">Momo</h5>
                                <p>The flavor of your food is what most customers focus on when they are deciding what to eat. </p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="../Images/img7.jpg" className="card-img-top" alt="..." width="100px " height="250px" />
                            <div className="card-body">
                                <h5 className="card-title">Chowmin</h5>
                                <p>The flavor of your food is what most customers focus on when they are deciding what to eat. </p>

                            </div>
                        </div>
                    </div>
                </div>
            </di>
        </>
    )
}

export default Card