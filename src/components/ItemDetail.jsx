import React from 'react';

export const ItemDetail = ({ car }) => {
    const handleBuyClick = () => {
        alert('¡Gracias por tu compra!');
    };

    return (
        <div>
            <div>{car.car_factory}</div>
            <div>{car.car_model}</div>
            <div>{car.car_year}</div>
            <div>{car.category}</div>
            <img src={car.img} alt={car.car_model} />
            <button onClick={handleBuyClick}>Comprar</button>
        </div>
    );
};

export default ItemDetail;
