import BookCard from "../components/BookCard.jsx";
import {allBooks} from "../db/books.js";
import Plus from "../components/Plus.jsx";
import {useState} from "react";

const Home = () => {
const [books, setBooks] = useState(allBooks)

    return (
        <div className={'p-4 px-2 sm:px-8 md:px-20'}>
            <div className={'currently-reading pt-2'}>
                <h1 className={'text-2xl border-b-2 mb-4'}>Currently Reading</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        books.filter(book => book.category==='reading').map(book => (
                            <BookCard books={books} setBooks={setBooks} id={book.id} key={book.id} book={book}/>
                        ))
                    }
                </div>
            </div>

            <div className={'want-to-read pt-8'}>
                <h1 className={'text-2xl border-b-2 mb-2'}>Want to read</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        books.filter(book => book.category==='wantsToRead').map(book => (
                            <BookCard books={books} setBooks={setBooks} id={book.id} key={book.id} book={book}/>
                        ))
                    }
                </div>
            </div>

            <div className={'currently-reading pt-8'}>
                <h1 className={'text-2xl border-b-2 mb-2'}>Read</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        books.filter(book => book.category==='read').map(book => (
                            <BookCard books={books} setBooks={setBooks} id={book.id} key={book.id} book={book}/>
                        ))
                    }
                </div>
            </div>
            <Plus/>
        </div>
    );
};

export default Home;