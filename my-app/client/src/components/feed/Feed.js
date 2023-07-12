import "./feed.css";
import Post from "../post/Post";
import Posts from "../posts/Posts"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Post />
        <Posts />
      </div>
    </div>
  )
}
