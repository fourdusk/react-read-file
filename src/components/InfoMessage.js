import React from 'react'

const InfoMessage = () => {
    return (
        <div className='info-message'>
            You've actived the <em>file finder</em>. Start typing filter the file list. Use
            <span className='navigation'>↑</span> and <span className='navigation'>↓</span> to
            navigate, <span className='navigation'>esc</span> to exit.
        </div>
    )
}

export default InfoMessage
