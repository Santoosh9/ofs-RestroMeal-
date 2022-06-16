import React from "react";


const Corousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                </div>
                <br/>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/img1.png" className="d-block w-100" alt="..." width="700px " height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="Images/img2.jpg" className="d-block w-100" alt="..."  width="700px " height="500px" />
                    </div>
                    <div className="carousel-item">
                        <img src="Images/img3.png" className="d-block w-100" alt="..." width="700px " height="500px" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Corousel
