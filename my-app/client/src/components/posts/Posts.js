import "./posts.css";

export default function Posts() {
  return (
    <div className="post">
      <div className="postsWrapper">
        <div className="postsTop">
          <div className="postsTopLeft">
            <img className="postsProfilePicture" src="" alt="" />
            <span className="postsUsername">Ani Kandikattu</span>
            <span className="postsDate">10 mins ago</span>
          </div>
          <div className="postsTopRight"></div>
        </div>
        <div className="postsCenter">
          <span className="postsText">Hello World! It's my first post!</span>
          <img className="postsImage" src="" alt="" />
        </div>
        <div className="postsBottom">
          <div className="postsBottomLeft">
            <img className="likeIcon" src="" alt="" />
            <img className="likeIcon" src="" alt="" />
            <span className="postsLikeCounter">3 people liked this!</span>
          </div>
          <div className="postsBottomRight">
            <span className="postsCommentText">2 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
