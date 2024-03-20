import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const[title, setTitle] = useState(book.title)

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(title)
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