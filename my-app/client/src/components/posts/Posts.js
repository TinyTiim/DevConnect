import "./posts.css";

export default function Posts() {
  return (
    <div className="post">
      <div className="postsWrapper">
        <div className="postsTop">
          <div className="postsTopLeft">
            <img className="postsProfilePicture" src="" alt=""/>
            <span className="postsUsername">Ani Kandikattu</span>
            <span className="postsDate">10 mins ago</span>
          </div>
          <div className="postsTopRight"></div>
        </div>
        <div className="postsCenter"></div>
        <div className="postsBottom"></div>
      </div>
    </div>
  );
}
