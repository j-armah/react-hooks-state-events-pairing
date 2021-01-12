import React, {useState} from "react"

const Details = (props) => {
    const { title, views, createdAt, upvotes, downvotes} = props.details
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)

    const handleLikes = (event) => {
        const emoji = event.target.textContent.split(" ")[1]

        emoji === "👍" ? setLikes(likes => likes + 1) : setDislikes(dislikes => dislikes + 1)

        // if (emoji === "👍") {
        //     setLikes(likes + 1)
        // } else {
        //     setDislikes(dislikes + 1)
        // }
    }


    return (
        <div>
            <h1>{ title }</h1>
            <small>{views} views | Uploaded { createdAt }</small>
            <div>
                <button onClick={handleLikes}>{likes} 👍</button>
                <button onClick={handleLikes}>{dislikes} 👎</button>
            </div>
        </div>
    )
}

export default Details
