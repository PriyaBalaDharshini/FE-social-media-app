import "./rightbar.css"
import { Users } from '../../dummyData.js'
import Online from "../online/Online.jsx"

function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Friend 1</b> and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul></>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">
                    User Information
                </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfroItems">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Trichy</span>
                    </div>
                    <div className="rightbarInfroItems">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Hosur</span>
                    </div>
                    <div className="rightbarInfroItems">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Married</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">
                    User Friends
                </h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/9.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFllowingName">Name 1</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFllowingName">Name 1</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFllowingName">Name 1</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFllowingName">Name 1</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFllowingName">Name 1</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar