import React from 'react';

const BookCard = ({book}) => {
    const {image, title, rating, writer} = book
    return (
        <div className={'book w-44 shadow-lg'}>
            <img src={image} alt="image" className={'w-full aspect-square object-contain'}/>
            <p className={'line-clamp-1'}>{title}</p>
            <p className={'line-clamp-1'}>{writer}</p>
        </div>
    );
};

export default BookCard;