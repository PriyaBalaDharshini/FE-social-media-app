import "./sidebar.css"

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-rss"></i>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-comments"></i>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-circle-play"></i>
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="fa-solid fa-user-group"></i>
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-bookmark"></i>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-circle-question"></i>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-briefcase"></i>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-calendar-day"></i>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Friend 1</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Friend 1</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Friend 1</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Friend 1</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Friend 1</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar