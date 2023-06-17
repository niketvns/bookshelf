import {IoMdArrowDropdown} from 'react-icons/io'
import {useState} from "react";
import Dropdown from "./Dropdown.jsx";

const BookCard = ({book, books, setBooks}) => {
    const [isDropdown, setIsDropdown] = useState(false)
    const {image, title, rating, writer} = book;
    return (
        <div className={'book w-44 shadow-lg p-2 relative select-none'}>
            <div className={'relative'}>
                <img src={image} alt="image" className={'w-full aspect-square'}/>
                <div className={'absolute -bottom-6 right-0 text-3xl bg-green-600 rounded-full p-1 cursor-pointer text-white'}>
                    <IoMdArrowDropdown onClick={()=>setIsDropdown(prevState => !prevState)}/>
                    {/*Dropdown menu*/}
                    <Dropdown books={books} setBooks={setBooks} isDropdown={isDropdown} setIsDropdown={setIsDropdown}/>
                </div>
            </div>
            <p className={'line-clamp-1 mt-4 font-bold'}>{title}</p>
            <p className={'line-clamp-1 text-black/50'}>{writer}</p>

        </div>
    );
};

export default BookCard;