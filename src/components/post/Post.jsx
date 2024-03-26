import './post.css'
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [heart, setHeart] = useState(post.heart)
    const [isLiked, setIsLiked] = useState(false)
    const [isHearted, setIsHearted] = useState(false)

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    const handleHeart = () => {
        setHeart(isHearted ? heart - 1 : heart + 1);
        setIsHearted(!isHearted)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="topTopLeft">
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="topTopRight">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={handleLike} />
                        <img src="assets/heart.png" alt="" className="likeIcon" onClick={handleHeart} />
                        <span className="postLikeCounter">You got {like} likes and {heart} Hearts</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post