import "./share.css";

export default function Post() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="postTop">
          <img className="shareProfilePicture" src="/images/1.png" alt="" />
          <input placeholder="share Something!" className="shareInput"></input>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Live Video</span>
            </div>
            <div className="shareOption">
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <span className="shareOptionText">Feeling/Activity</span>
            </div>
          </div>
          <button className="shareButton">share!</button>
        </div>
      </div>
    </div>
  );
}
