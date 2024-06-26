import React from 'react';
import { useFavContext } from '../context/FavContextProvider';
import FavItem from './FavItem';
import Decorate from './Decorate';

function Favourities() {
    const { data } = useFavContext();
    console.log(data);
    return (
        <div className='min-h-screen mt-20'>
            <Decorate/>
            <div className='container mx-auto p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {data.map((curElem) => (
                        <FavItem
                            id={curElem.id}
                            title={curElem.title}
                            price={curElem.price}
                            image={curElem.image}
                            key={curElem.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourities;
