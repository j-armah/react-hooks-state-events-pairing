import React, { useState } from 'react'
import Comment from "./Comment"

const Comments = ({comments}) => {
    const [searchUser, setSearchUser] = useState("")

    const handleSearch = (event) => {
        setSearchUser(event.target.value)
    }

    const filterUsers = comments.filter(comment => comment.user.toLowerCase().includes(searchUser.toLowerCase()))

    const commentUls = filterUsers.map(comment => 
        <Comment 
            key={comment.id}
            user={comment.user}
            comment={comment.comment} 
        />
    )

    return(
        <div>
            <hr/>
            <h3>{comments.length} Comments</h3>
            
            {commentUls}
        <div>
            <input type='text' placeholder="search" onChange={handleSearch} />
        </div>
        </div>
    )
}

export default Comments


