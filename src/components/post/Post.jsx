import './post.css'

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="topTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">User Name</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="topTopRight">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey ! Its's my first post:)</span>
                    <img src="assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">34 people liked it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post