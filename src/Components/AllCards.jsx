import React, { useEffect, useState } from "react";
import { Card } from "./Card";

export const AllCards = ({ category }) => {
  const [news, setnews] = useState([]);
  const [loading, setloading] = useState(true);

  // set language also
  let apikey = '1d908538c91280351dc325c66b55931c';
 let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${apikey}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setnews(data.articles);
        console.log(data.articles);
      } catch {
        console.log("error in Api");
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [category, url]);

  return (
    <>
      <h1>
        Info <span className="badge bg-danger">News</span>
      </h1>
      <div className="container first-container">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          news.map((newsitem) => (
            <Card
              key={newsitem.url}
              description={newsitem.description}
              title={newsitem.title}
              src={newsitem.image}
              newsUrl={newsitem.url}
              publishedAt={newsitem.publishedAt}
              source={newsitem.source.name}
            />
          ))
        )}
      </div>
    </>
  );
};
