import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/PostsScreen.css"
import FilterPost from "../Component/FilterPosts";
function PostsScreen() {
  const [allPosts, setAllPosts] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const Posts = await axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}`
    );

    setAllPosts(Posts.data.posts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <h1>Posts</h1>
    <div className="postFilterCards">
                  <FilterPost key={1} Heading="Without Meta Description" datas={Object.entries(allPosts).filter(post=>post[1].meta_description===null)}/>
                  <FilterPost key={2} Heading="Too long Meta Description" datas={Object.entries(allPosts).filter(post=>post[1].meta_description!==null && post[1].meta_description.length>50 ) }/>
                  <FilterPost key={3} Heading="Too long Url more than 100 words" datas={Object.entries(allPosts).filter(post=>post[1].url.length>100)}/>
                  <FilterPost key={4} Heading="Too long Posts more than 1500 words" datas={Object.entries(allPosts).filter(post=>post[1].excerpt.length>1500)}/>
                  <FilterPost key={5}  Heading="Too Short Posts ,less than 250 words" datas={Object.entries(allPosts).filter(post=>post[1].excerpt.length<250)}/>
    </div>
    </>
  );
}

export default PostsScreen;
