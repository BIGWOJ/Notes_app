import React, { useState, useEffect } from 'react'
import List_Item from '../components/List_Item'
import Add_Button from '../components/Add_Button'

const Notes_List_Page = () => {

    let [notes, set_notes] = useState([])

    useEffect(() => {
        get_notes()
    }, [])

    let get_notes = async() => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        set_notes(data)
    }

    return (
        <div className='notes'>
            <div className='notes_header'>
                <h2 className='notes_title'>&#9782; Notes</h2>
                <p className='notes_count'>{notes.length}</p>
            </div>

            <div className='notes_list'>
                {notes.map((note, index) => (
                    <List_Item key={index} note={note} />
                ))}
            </div>  

            <Add_Button />
        </div>
    )
}

export default Notes_List_Page
