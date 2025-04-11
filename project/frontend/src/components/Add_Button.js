import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Plus_icon} from '../assets/plus.svg'

const Add_Button = () => {
    return (
        <Link to='/notes/new' className='floating_button'>
            <Plus_icon />
        </Link>
    )
}

export default Add_Button
