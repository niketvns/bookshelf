import React from 'react';
import BookCard from "../components/BookCard.jsx";
import {books} from "../db/books.js";

const Home = () => {
    return (
        <div className={'p-4'}>
            <div className={'currently-reading pt-2'}>
                <h1 className={'text-2xl font-bold border-b-2 border-black mb-4'}>Currently Reading</h1>
                <div className={'flex gap-4 flex-wrap items-center'}>
                    {
                        books.filter(book => book.isReading).map(book => (
                            <BookCard book={book}/>
                        ))
                    }
                </div>
            </div>

            <div className={'want-to-read pt-8'}>
                <h1 className={'text-2xl font-bold border-b-2 border-black mb-2'}>Want to read</h1>
                <div className={'flex gap-4 flex-wrap items-center'}>
                    {
                        books.filter(book => book.wantToRead).map(book => (
                            <BookCard book={book}/>
                        ))
                    }
                </div>
            </div>

            <div className={'currently-reading pt-8'}>
                <h1 className={'text-2xl font-bold border-b-2 border-black mb-2'}>Read</h1>
                <div className={'flex gap-4 flex-wrap items-center'}>
                    {
                        books.filter(book => book.read).map(book => (
                            <BookCard book={book}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;