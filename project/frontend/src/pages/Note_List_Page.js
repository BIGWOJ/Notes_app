import React, {useState, useEffect} from 'react'
import List_item from '../components/List_item'

const Note_List_Page = () => {

    let [notes, set_notes] = useState([])

    useEffect(() => {
        get_notes()
    }, [])

    let get_notes = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        set_notes(data)
    }

    return (
        <div>
            <div className="notes_list">
                {notes.map((note, index) => (
                    <List_item key={index} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default Note_List_Page
