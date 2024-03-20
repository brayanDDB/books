import { useState } from "react";
import BookEdit from "./BookEdit"

function BookShow({ book, onDelete, onEdit }) {
    const[showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
        console.log(showEdit)
    }

    const handleSubmit = (title) => {
        setShowEdit(false);
        onEdit(book.id, title)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>

    }

    return (
    <div className="book-show">
        <img 
            alt="photos"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                X
            </button>
        </div>
    </div>);
}

export default BookShow;