import React, {useState} from "react";

function Input(props){

    const [note,setNote]= useState({heading:"", content:""});

    function submitNote(event){
        event.preventDefault();
        props.addNote(note);
    }

    function takeNote(event){

        const {value, name}= event.target;
     

        setNote(prevValue=>{
          return {
            ...prevValue,
            [name]: value
          }
        })
    }







    return(
        <div className="inputArea">
            <form onSubmit={submitNote}>
                <div><input onChange={takeNote} value={note.heading} name="heading" type="text" placeholder="Title"></input></div>
 <div><textarea onChange={takeNote} value={note.content} name="content" rows="3"  placeholder="Take a note"></textarea></div>
                <button type="submit">+</button>
            </form >
        </div>
    )
}


export default Input;