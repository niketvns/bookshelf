import {BiArrowBack} from 'react-icons/bi'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {allBooks} from "../db/books.js";
import BookCard from "../components/BookCard.jsx";

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    const searchHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const searchBooks = allBooks.filter(book => book.title.toUpperCase().includes(searchInput.toUpperCase()) || book.writer.toUpperCase().includes(searchInput.toUpperCase()))

    return (
        <div className={'search'}>
            <div className="input flex items-center justify-center gap-4 m-4 border-b-2 mx-8 shadow-lg">
                <div className="back-icon flex-1 pl-4 text-3xl cursor-pointer text-black/60"
                     onClick={() => navigate('/')}>
                    <BiArrowBack/>
                </div>
                <input type="search" name="search" id="" placeholder={'Search Books...'}
                       className={'w-full h-full backdrop-sepia-0 bg-black/5 p-2 border-none outline-0 px-4'}
                       onChange={searchHandler} value={searchInput}/>
            </div>
            {
                searchInput &&
                <div className={'search-result p-2'}>
                    {
                        <h1 className={'text-2xl border-b-2 mb-4'}>Search Result
                            for &apos;{searchInput}&apos;</h1>
                    }
                    <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                        {
                            searchBooks.length ?
                                searchBooks.map(book => (
                                    <BookCard key={book.id} book={book}/>
                                )) : <p className={'text-black/40 text-2xl'}>Not found</p>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Search;