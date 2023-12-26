import React from "react";

export const Card = ({ title, description, src, publishedAt, newsUrl,source }) => {
  const timeShow = new Date(publishedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormate = timeShow.toLocaleDateString(undefined, options);
  return (
    <div
      className="card  ml-auto bg-dark text-light mb-3 my-3 mx-3 px-3 py-3 d-inline-block p-2"
    >
      <img
        src={src?src: "../news.png"}
        className="card-img-top" alt="img"
      />
      <div className="card-body">
        {title && typeof title === "string" && (
          <h5 className="card-text">{title.slice(0,50)}</h5>
        )}
        {description && typeof description === "string" && (
          <p className="card-text">{`${description.slice(0,80)} ...`}</p>
        )}
        {/* <p className="card-text">{description.slice(0,90)}</p> */} {/* this is worng */}
        {/* this is worng */}
        <p className="card-text">Date: {dateFormate} by {
        source && typeof source =="string" &&(source.slice(0,10))}
        </p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
          See more 
        </a>
      </div>
    </div>
  );
};
