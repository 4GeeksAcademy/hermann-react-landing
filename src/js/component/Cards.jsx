import React from 'react';
import rigoImage from "../../img/rigo-baby.jpg";

const cardStyles = {
    margin: "50px 50px"
}

export const Cards = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center" style={cardStyles}>
                <div className="card" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}