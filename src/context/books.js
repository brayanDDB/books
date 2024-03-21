import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const[books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    const handleEditBook = async (id, newTitle) => {
        const response = await axios.put('http://localhost:3001/books/' + id, {
            title: newTitle
        });
        const updateBooks = books.map((book) => {
            if(book.id === id) {
                return { ...book, ...response.data};
            }

            return book;
        });

        setBooks(updateBooks);
    }

    const handleDeleteBook = async (id) => {
        const response = await axios.delete('http://localhost:3001/books/' + id);
        const updateBooks = books.filter((book) => {
            return response.data.id !== book.id
        });

        setBooks(updateBooks);
    };

    const handleCreateBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        const updateBooks = [
            ...books, 
            response.data
        ];
        console.log(updateBooks);
        setBooks(updateBooks);
    };

    const valueToChare = {
        books,
        handleDeleteBook,
        handleEditBook,
        handleCreateBook,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToChare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;