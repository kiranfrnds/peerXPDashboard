import React, { useCallback, useEffect, useState } from "react";
import OutlinedCard from "../Component/CardComponent";
import "../Css/DashboardCss.css";
import axios from "axios";
import PostCardComponent from "../Component/PostCardComponent";
function DashboardScreen() {
  const [numOfPosts, setNumOfPosts] = useState(0);
  const [numOfPages, setNumOfPages] = useState(0);
  const [authors, setAuthors] = useState(0);
  const [tags, setTags] = useState(0);
  const [latestPosts, setLatestPosts] = useState({});

  const fetchData = useCallback(() => {
    const Posts = axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}`
    );
    const Pages = axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=${process.env.REACT_APP_API_KEY}`
    );
    const Authors = axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=${process.env.REACT_APP_API_KEY}`
    );
    const Tags = axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=${process.env.REACT_APP_API_KEY}`
    );
    const LatestPosts = axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}&limit=5`
    );
    axios.all([Posts, Pages, Authors, Tags, LatestPosts]).then(
      axios.spread((...allData) => {
        const NumOfPosts = allData[0].data.posts.length;
        const NumOfPages = allData[1].data.pages.length;
        const Authors = allData[2].data.authors.length;
        const Tags = allData[3].data.tags.length;
        const LatestPosts = allData[4].data.posts;
        console.log("anrauar");
        setNumOfPosts(NumOfPosts);
        setNumOfPages(NumOfPages);
        setAuthors(Authors);
        setTags(Tags);
        setLatestPosts(LatestPosts);
      })
    );
  }, []);
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, [fetchData]);
  return (
    <>
    <div className="container">
      <h1 className="dashboardHeading">Dashboard Screen</h1>
      <div className="dashboardCards">
        <OutlinedCard key={1} Name="Total Pages" Data={numOfPages} />
        <OutlinedCard key={2} Name="Total Posts" Data={numOfPosts} />
        <OutlinedCard key={3} Name="Total Authors" Data={authors} />
        <OutlinedCard key={4} Name="Total Tags" Data={tags} />
        <div>
          <h2 className="subHeading">Recent Posts</h2>
       <div className="postGridDiv">
       {Object.entries(latestPosts).map((a) => {
          console.log(a[1].url)
          return (
            <PostCardComponent
              title={a[1].title}
              key={a[1].id}
              custom_excerpt={a[1].custom_excerpt}
              url={a[1].url}
              excerpt={a[1].excerpt}
            />
          );
        })}
       </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default DashboardScreen;
