import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const[books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

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

    const handleDeleteBook = async (id) => {
        const response = await axios.delete('http://localhost:3001/books/' + id);
        const updateBooks = books.filter((book) => {
            return response.data.id !== book.id
        });

        setBooks(updateBooks);
    };

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

    return(
        <div className='app'>
            <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook}/>
            <BookCreate onSubmit={handleCreateBook}/>
        </div>);
}

export default App;