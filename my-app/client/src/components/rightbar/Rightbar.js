import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="" alt="" />
          <span className="birthdayText">
            {" "}
            2 Friends have a birthday today!
          </span>
        </div>
        <img className="rightbarAd" src="" alt="" />
        <h4 className="rightbarTitle">Friends Online</h4>
        <ul className="rightbarFriendsList">
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
          <li className="rightbarFriends">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="" alt=" "/>
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
