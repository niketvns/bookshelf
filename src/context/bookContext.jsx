 import React, {createContext, useContext, useState} from "react";
 import {allBooks} from "../db/books.js";

const bookContext = createContext()

 const BookProvider = ({children}) => {
    const [books, setBooks] = useState(allBooks)

    return(
        <bookContext.Provider value={{books, setBooks}}>
            {children}
        </bookContext.Provider>
    )
 }

 const useGlobalBooks = () => useContext(bookContext)

 export {BookProvider, useGlobalBooks}