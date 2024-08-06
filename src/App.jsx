import { useState } from 'react'
import Input from "./components/Input"
import './App.css'
import Note from "./components/Note"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  const [notes, setNotes]= useState([]);

  function addNote(note){
    setNotes(prevValue=>{
      return[
        ...prevValue,
        note
    ]
    })
    console.log(notes)

  }

  function deleteNote(index){
      setNotes((prevValue)=>{
          return (
            prevValue.filter((note, i)=>{
              return (index!=i);
            })
          )
        
        })
      }
    
  



    return(
      <div>
        <Header />
        <Input addNote={addNote} />
        {notes.map((note, index)=>{
          return(<Note heading={note.heading} content={note.content} index={index} deleteNote={deleteNote}/>)
        }
      )}
      <Footer />
      </div>
    )
}

export default App
