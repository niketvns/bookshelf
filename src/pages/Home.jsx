import BookCard from "../components/BookCard.jsx";
import Plus from "../components/Plus.jsx";
import {useGlobalBooks} from "../context/bookContext.jsx";

const Home = () => {
    const {books} = useGlobalBooks()

    const reading = books.filter(book => book.category==='reading')
    const wantsToRead = books.filter(book => book.category==='wantsToRead')
    const read = books.filter(book => book.category==='read')

    return (
        <div className={'p-4 px-2 sm:px-8 md:px-20'}>
            <div className={'currently-reading pt-2'}>
                <h1 className={'text-2xl border-b-2 mb-4'}>Currently Reading</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        reading.length ?
                        reading.map(book => (
                            <BookCard id={book.id} key={book.id} book={book}/>
                        )) :
                            <p className={'text-black/40 text-2xl'}>Nothing</p>
                    }
                </div>
            </div>

            <div className={'want-to-read pt-8'}>
                <h1 className={'text-2xl border-b-2 mb-2'}>Want to read</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        wantsToRead.length ?
                            wantsToRead.map(book => (
                            <BookCard id={book.id} key={book.id} book={book}/>
                        )) :
                            <p className={'text-black/40 text-2xl'}>Nothing</p>
                    }
                </div>
            </div>

            <div className={'currently-reading pt-8'}>
                <h1 className={'text-2xl border-b-2 mb-2'}>Read</h1>
                <div className={'flex gap-4 flex-wrap justify-center items-center'}>
                    {
                        read.length ?
                        read.map(book => (
                            <BookCard id={book.id} key={book.id} book={book}/>
                        )) :
                            <p className={'text-black/40 text-2xl'}>Nothing</p>
                    }
                </div>
            </div>
            <Plus/>
        </div>
    );
};

export default Home;