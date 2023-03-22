import React, { useEffect, useState } from 'react';
import InfoCard from './InfoCard';



const Home = () => {
 
    
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.planndesign.com/gapi/drawings')
            .then(response => response.json())
            .then(data => {
                setData(data);
                // console.log(data);
            })

            .catch(error => console.error(error));
    }, []);
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
            {
                data.slice(0, 10).map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default Home;