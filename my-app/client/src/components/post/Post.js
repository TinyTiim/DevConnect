import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfilePicture" src="" alt="" />
            <span className="postUsername">Ani Kandikattu</span>
            <span className="postDate">10 mins ago</span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">
          <span className="postText">Hello World! It's my first post!</span>
          <img className="postImage" src="" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="" alt="" />
            <img className="likeIcon" src="" alt="" />
            <span className="postLikeCounter">3 people liked this!</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">2 comments</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}
