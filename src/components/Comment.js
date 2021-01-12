
import React, { useState } from 'react'

function Comment({ user, comment}) {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [isDeleted, setIsDeleted] = useState(false)

    const handleLikes = (event) => {
        const emoji = event.target.textContent.split(" ")[1]

        emoji === "👍" ? setLikes(likes + 1) : setDislikes(dislikes + 1)
    }

    const handleDelete = (event) => {
        setIsDeleted(true)
    }

    if (isDeleted) {
        return null
    } else {
        return (
            <ul>
                <li>
                    <b>{user}</b> 
                    <br/>
                    {comment}
                    <div>
                        <button onClick={handleLikes}>{likes} 👍</button>
                        <button onClick={handleLikes}>{dislikes} 👎</button>
                        <button onClick={handleDelete}> Delete </button>
                </div>
                </li>
            </ul>
        )
    }

    
}

export default Comment

