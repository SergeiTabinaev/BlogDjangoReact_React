import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


function PostDetail( {match} ) {

    const [posts, setPosts] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `/api/blogpost/${id}/`
        }).then(response => {
            setPosts(response.data)
        })
    }, [id])

    return(
        <div>
            Post with id {posts.id}
            <p>Title: <strong>{posts.title}</strong></p>
        </div>
    )
}

export default PostDetail;
