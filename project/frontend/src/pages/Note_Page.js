import React, {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {ReactComponent as Arrow_left_icon} from '../assets/arrow_left.svg'
import {Link} from 'react-router-dom'


const Note_Page = () => {
    const {id: note_id} = useParams()
    let [note, set_note] = useState(null)

    useEffect(() => {   
        get_note()
    }, [note_id])

    let get_note = async () => {
        // Prevent fetching if note_id is 'new' - there is no note to fetch
        if (note_id === 'new') return

        let response = await fetch(`/api/notes/${note_id}`)
        let data = await response.json()
        console.log(response)
        set_note(data)
    }

    let create_note = async () => {
        fetch(`/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let update_note = async () => {
        fetch(`/api/notes/${note_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let delete_note = async () => {
        fetch(`/api/notes/${note_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }) 
    }

    let handle_submit = () => {
        if (note_id !== 'new' && note.body == '') {
            delete_note()
        } 
        else if (note_id !== 'new'){
            update_note()
        }
        else if (note_id == 'new' && note !== null) {
            create_note()
        }
    }

    let handle_change= (value) => {
        set_note(note => ({...note, 'body': value}))
    }

    return (
        <div className='note'>
            <div className='note_header'>
                <h3>
                    <Link to='/' className='back_button' onClick={handle_submit}>
                        <Arrow_left_icon/>
                    </Link>
                </h3>

                {/* Conditional rendering, render delete button only if note_id is not 'new' */}
                <Link to='/'>
                {note_id !== 'new' ? (
                    <button onClick={delete_note}>Delete</button>
                ) : (
                    <button onClick={handle_submit}>Done</button>
                )}
                </Link>

            </div>
            {/* Question mark is used to rendering data only if variable note is not null */}
            <textarea onChange={(e) => {handle_change(e.target.value)}} value={note?.body}></textarea>
        </div>
    )
}

export default Note_Page
