import React from 'react';

const Card = () => {
    return ( 
        <div className=' d-flex flex-row mb-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src="https://http2.mlstatic.com/D_NQ_NP_720903-MPE51560556787_092022-Y.webp" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
    )
}

export default Card;