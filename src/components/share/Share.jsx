import "./share.css"

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input type="text" placeholder="Whats in your Mind!!?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <i className="fa-solid fa-photo-film" style={{ color: "tomato" }}></i>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <i className="fa-solid fa-tag" style={{ color: "blue" }}></i>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <i className="fa-solid fa-location-dot" style={{ color: "green" }}></i>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <i className="fa-solid fa-icons" style={{ color: "pink" }}></i>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share