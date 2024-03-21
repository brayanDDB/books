import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
    const[title, setTitle] = useState('');
    const{ handleCreateBook } = useBooksContext();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(title);
        setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>
            </form>    
        </div>);
}

export default BookCreate;