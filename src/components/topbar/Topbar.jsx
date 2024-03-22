import './topbar.css'

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <div className="topbarLogo">SocialPedia</div>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <i className="fa-solid fa-user"></i>
                        <sup className="topbarIconBadge">1</sup>
                    </div>
                    <div className="topbarIconItem">
                        <i className="fa-solid fa-message"></i>
                        <sup className="topbarIconBadge">1</sup>
                    </div>
                    <div className="topbarIconItem">
                        <i className="fa-solid fa-bell"></i>
                        <sup className="topbarIconBadge">1</sup>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar