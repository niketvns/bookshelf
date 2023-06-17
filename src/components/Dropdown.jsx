import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Dropdown = ({isDropdown, setIsDropdown, id, setBooks, books}) => {

    const changeCategory = (category) => {
        setBooks(books.map(book => book.id === id ? {...book, category} : book))
        setIsDropdown(false)
    }

    return (
        <div id="dropdown"
             className={`z-10 ${isDropdown ? 'block' : 'hidden'} absolute divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-200 top-14 -left-32`}>
            <ul className="py-2 text-sm text-black">
                <li className="block px-4 py-2 bg-black/10 text-black/40 select-none">
                    Move to...
                </li>
                <label htmlFor="reading" className={'flex gap-2'}>
                    <input id={'reading'} type={'checkbox'} className="block px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black" value={''}/>
                    Currently reading
                </label>
                <label htmlFor="wantToRead" className={'flex gap-2'}>
                    <input id={'wantToRead'} type={'checkbox'} className="block px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black" value={''}/>
                    Want to read
                </label>
                <label htmlFor="read" className={'flex gap-2'}>
                    <input id={'read'} type={'checkbox'} className="block px-4 py-2 cursor-pointer hover:bg-green-600 hover:text-white text-black"/>
                    Read
                </label>
            </ul>
        </div>
    );
};

export default Dropdown;