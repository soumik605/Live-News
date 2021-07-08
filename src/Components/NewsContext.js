import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./mystyle.css";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("cricket");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://newsapi.org/v2/everything?q=${item}&from=2021-07-07&sortBy=popularity&apiKey=30116005ab6e4c5da0cc14c167d123bc`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson.articles);
      console.log(resJson.articles);
    };
    fetchApi();
  }, [item, data]);

  return (
    <div>
      <h1 className="head__text">News App 📣</h1>
      <input
        className="input__text"
        placeholder="  Search Topic.."
        onChange={(e) => setItem(e.target.value)}
      />
      <div className="all__news">
        {data ? (
          data.map((a) => (
            <div className="news">
              <h1 className="news__title">{a.title}</h1>
              <p className="news__desc">{a.description}</p>
              <span className="news__author">Author : {a.author}</span>
              <br />
              <span className="news__published news__info">
                Published At : {a.publishedAt}
              </span>
              <br />
              <span className="news__source news__info">
                Source : {a.source.name}
              </span>
            </div>
          ))
        ) : (
          <div>No News Found</div>
        )}
      </div>
    </div>
  );
};
