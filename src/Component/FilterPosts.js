import React from "react";
import { useEffect, useState } from "react";
import "../Css/FilterPostCss.css";
function FilterPosts({ Heading, datas }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(datas);
    }, 100);
  }, [setData, datas, Heading]);
  return (
    <div className="filterCards">
      {data.length > 0 ? (
        <>
          <h4>{Heading}</h4>
          {data.map((a) => {
            return (
              <a href={a[1].url} rel="noreferrer"target="_blank">
                <h5>{a[1].url}</h5>
              </a>
            );
          })}
        </>
      ) : (
        <>
          <h4>{Heading}</h4>
          <h5>No posts found</h5>
        </>
      )}
    </div>
  );
}

export default FilterPosts;
