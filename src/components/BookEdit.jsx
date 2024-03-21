import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
    const[title, setTitle] = useState(book.title);
    const { handleEditBook } = useContext(BooksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditBook(book.id, title);
        onSubmit();
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title:</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Save</button>
        </form>
    );
}

export default BookEdit;