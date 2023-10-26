import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  const ADS = "YOU ORDER, WE DELIVER";
  return (
    <div>
      <Marquee
        speed={60}
        style={{ backgroundColor: "#94004F", color: "white", height: "4rem" }}
      >
        <h1>
          {ADS}
          <span style={{ backgroundColor: "#E07E1B",borderTopRightRadius:30 }}> FOR FREE 🛒 </span>
        </h1>
      </Marquee>
    </div>
  );
};

export default Marque;
