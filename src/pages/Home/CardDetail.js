import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetail = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            <h3>This is from CardDeatail</h3>
        </div>
    );
};

export default CardDetail;