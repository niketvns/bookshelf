import React from 'react';
import {BsCheck} from 'react-icons/bs'

const Dropdown = ({isDropdown, setIsDropdown, id, setBooks, books}) => {

    const changeCategory = (category) => {
        setBooks(books.map(book => book.id === id ? {...book, category: category} : book))
        setIsDropdown(false)
    }

    return (
        <div id="dropdown"
             className={`z-10 ${isDropdown ? 'block' : 'hidden'} absolute divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-200 top-14 -left-32`}>
            <ul className="py-2 text-sm text-black">
                <li className="block px-4 py-2 bg-black/10 text-black/40 select-none">
                    Move to...
                </li>
                <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black" onClick={()=>changeCategory('reading')}>
                    <BsCheck className={'text-xl'}/>Currently reading
                </li>
                <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black" onClick={()=>changeCategory('wantsToRead')}>
                    Want to read
                </li>
                <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black" onClick={()=>changeCategory('read')}>
                    Read
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;