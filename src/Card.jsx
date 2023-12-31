import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt={props.sname} className="card_img" />
        <div className="card_info">
          <span className="card_categories">{props.title}</span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
