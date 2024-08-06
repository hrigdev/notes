import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props){
    function deleteNote(){
        props.deleteNote(props.index);
    }
    return(
        <div className="note">
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}><DeleteIcon /></button>
        </div>
    )
}

export default Note;