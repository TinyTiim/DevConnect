import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img className="postProfilePicture" src="/images/1.png" alt="" />
          <input placeholder="Post Something!" className="postInput"></input>
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postOptions">
            <div className="postOption">
              <span className="postOptionText">Live Video</span>
            </div>
            <div className="postOption">
              <span className="postOptionText">Photo/Video</span>
            </div>
            <div className="postOption">
              <span className="postOptionText">Feeling/Activity</span>
            </div>
          </div>
          <button className="postButton">Post!</button>
        </div>
      </div>
    </div>
  );
}
