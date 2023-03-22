import React from 'react';
import { Link } from 'react-router-dom';


const InfoCard = ({ card }) => {
    const { image, summary, title } = card;
    const picture = image.url;
    // console.log(card);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
           <Link> <figure><img src={picture} alt="" /></figure></Link>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{summary}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;