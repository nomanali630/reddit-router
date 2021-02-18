
import axios from "axios";
import React from "react";
import "./dashboard.css"




function Dashboard() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children.map(obj => obj.data);

        setPosts(newPosts);
        console.log(newPosts)
      });
  }, []);


  return (
    <div>
      <h1>Dashboard</h1>

      {posts.map(post => (
        <div className="main" key={post.id}>
          <div >
            <h2 >{post.title}</h2>
            <span >Author Name: {post.author}</span>
            <p >{post.selftext}</p>
            <div>
              <span> POST SCORE: {post.score}</span>
                           
            </div>
          </div>
        </div>

      ))}




    </div>





  )

}

export default Dashboard;
