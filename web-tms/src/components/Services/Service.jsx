import React from "react";
import "./style.scss";

const Service = ({ src, title, services, updateActiveService, index }) => {
  console.log("Service", services, "title", title, "src", src);
  return (
    <div className="gallery-item-wraper">
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          {services.map((service, index) => (
            <div key={index}>
              <p className="gallery-info-category">{service}</p>
              <br />
            </div>
          ))}
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
