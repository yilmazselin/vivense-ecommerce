import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesCard({ data, lenght }) {
  const imageStyle = {
    width: `calc(100% / ${lenght})`,
    height: `calc(100% / ${lenght})`,
  };

  return (
    <Link style={imageStyle} to={"/products"}>
      <div className="card-container">
        <div className="category-card">
          <div className="category-card-img">
            <img src={data.img} alt="" />
          </div>
          <div className="category-card-footer">
            <h5 className="footer-title">{data.name}</h5>
            {data.subTitle && <h5 className="sub-title">{data.subTitle}</h5>}
          </div>
        </div>
      </div>
    </Link>
  );
}
