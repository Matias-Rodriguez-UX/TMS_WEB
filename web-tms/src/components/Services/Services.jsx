import React, { useState } from "react";
import infoServices from "./infoService";
import Service from "./Service";
import "./style.scss";

const Services = ({ src, index, columnOffset }) => {
  const [activeService, setActiveService] = useState(1);
  console.log("infoService", infoServices);
  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span>{activeService}</span>
          <span className="divider" />
          <span>{infoServices.length}</span>
        </div>
        {infoServices.map((service, index) => (
          <Service
            key={index}
            index={index}
            {...service}
            updateActiveService={(index) => setActiveService(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
