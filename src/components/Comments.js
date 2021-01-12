import React, { useState } from 'react'
import Comment from "./Comment"

const Comments = ({comments}) => {
    const [searchUser, setSearchUser] = useState("")
    const [searchComment, setSearchComment] = useState("")
    let filter = [...comments]

    const handleSearch = (event) => {
        setSearchUser(event.target.value)
    }

    const handleCommentSearch = (event) => {
        setSearchComment(event.target.value)
    }

    if (searchUser !== "") {
        filter = comments.filter(comment => comment.user.toLowerCase().includes(searchUser.toLowerCase()))
    }

    if (searchComment !== "") {
        filter = comments.filter(comment => comment.comment.toLowerCase().includes(searchComment.toLowerCase()))
    }

    const commentUls = filter.map(comment => 
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
            <div>
                <input type='text' placeholder="search users" onChange={handleSearch} />
            </div>
            <div>
                <input type='text' placeholder="search comments" onChange={handleCommentSearch} />
            </div>

            {commentUls}
        </div>
    )
}

export default Comments


