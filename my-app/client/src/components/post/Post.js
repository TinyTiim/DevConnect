import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img className="postProfilePicture" src="/images/1.png" alt=""/>
          <input placeholder= 'Post Something!' className="postInput"></input>
        </div>
        <hr className="postHr" />
        <div className="postBottom">
          <div className="postOptions">
            <div className="postOption">
              <span className="postOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
