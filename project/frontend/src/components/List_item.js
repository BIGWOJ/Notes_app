import React from 'react'
import {Link} from 'react-router-dom'

let get_title = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 50) {
        title = title.slice(0, 50) + '...'
    }

    return title
}

let get_time = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

const List_Item = ({note}) => {
    return (
        <Link to={`/notes/${note.id}`} className='list_item'>
            <div className='notes_list_item'>
                <h3>{get_title(note)}</h3>
                <p><span>{get_time(note)}</span></p>
            </div>
        </Link>
    )
}

export default List_Item
