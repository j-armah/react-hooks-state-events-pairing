import React, { useState } from 'react'
import Comment from "./Comment"

const Comments = ({comments}) => {
    const [searchUser, setSearchUser] = useState("")
    const [searchComment, setSearchComment] = useState("")
    const [sortComment, setSortComment] = useState("false")
    let filter = [...comments]

    const handleSearch = (event) => {
        setSearchUser(event.target.value)
    }

    const handleCommentSearch = (event) => {
        setSearchComment(event.target.value)
    }

    const sortComments = () => {
        setSortComment(!sortComment)
    }

    
    if (searchUser !== "") {
        filter = comments.filter(comment => comment.user.toLowerCase().includes(searchUser.toLowerCase()))
    }

    if (searchComment !== "") {
        filter = comments.filter(comment => comment.comment.toLowerCase().includes(searchComment.toLowerCase()))
    }

    if (!sortComment) {
        filter = filter.sort((a, b) => {
        if (a.comment > b.comment) {
            return -1
        } else if (a.comment < b.comment){
            return -1
        }
        return 0
        })
        console.log(filter)
    }

    const commentUls = filter.map(comment => 
        <Comment 
            key={comment.id}
            user={comment.user}
            comment={comment.comment} 
        />
    )


    return (
        <div>
            <hr/>
            <h3>{comments.length} Comments</h3>
            <div>
                <input type='text' placeholder="search users" onChange={handleSearch} />
            </div>
            <div>
                <input type='text' placeholder="search comments" onChange={handleCommentSearch} />
            </div>
            <button onClick={sortComments}>Sort Comments</button>

            {commentUls}
        </div>
    )
}

export default Comments


