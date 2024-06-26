import React, { useEffect } from 'react';
import { useProdContext } from '../context/ProductContextProvider';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';
import Star from './Star';
import FormatPrice from '../Helpers/FormatPrice';
import AddToFav from './AddToFav';
import Decorate from './Decorate';

const API = "https://fakestoreapi.com/products";

function SingleProduct() {
    const { getSingleProduct, singleProduct, isSingleLoading } = useProdContext();
    const { title, image, rating, category, description, price } = singleProduct;
    const rate = rating ? rating.rate : 0;
    const count = rating ? rating.count : 0;
    const { id } = useParams();

    useEffect(() => {
        getSingleProduct(API, id - 1);
    }, [id]);

    if (isSingleLoading) return <div className='text-xl font-bold text-center py-40'>...Loading</div>;

    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <Decorate/>
            <div className='flex flex-col lg:flex-row items-center w-full max-w-4xl bg-white rounded-2xl shadow-lg my-20'>
                <div className='w-full md:w-1/3 p-4'>
                    <img src={image} alt={title} className='w-full h-full object-contain object-center rounded-lg' />
                </div>
                <div className='flex flex-col p-4 lg:p-14 w-full md:w-2/3'>
                    <h1 className='text-xl lg:text-2xl mb-4 font-bold'>{title}</h1>
                    <Star stars={rate} reviews={count} />
                    <div className='text-lg lg:text-xl font-bold text-orange-500 mt-4'>
                        <span className='text-black'>MRP:</span> <FormatPrice price={price} />
                    </div>
                    <div className='text-sm lg:text-base my-5'>{description}</div>
                    <AddToCart singleProduct={singleProduct} />
                    <AddToFav singleProduct={singleProduct}/>
                    <div className='text-sm lg:text-base mt-4'>Category: {category}</div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
