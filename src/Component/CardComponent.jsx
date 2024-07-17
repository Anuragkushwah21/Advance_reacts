import React from "react";
import Card from "./Card";
import img1 from "../Component/image/mob-psycho-100-anime-wallpaper-thumb.jpg";
import img2 from "../Component/image/mob-psycho-100-explosion-of-mobs-feelings-thumb.jpg";
import img3 from "../Component/image/mob-psycho-100-anime-wallpaper-thumb.jpg";
import img4 from "../Component/image/mob-psycho-100-anime-wallpaper-thumb.jpg";
import img5 from "../Component/image/mob-psycho-100-explosion-of-mobs-feelings-thumb.jpg";
import img6 from "../Component/image/mob-psycho-100-anime-wallpaper-thumb.jpg";

function CardComponent() {
  return (
    <div>
      <h1 className="heading">Card Gallery</h1>
      <div className="cardComp">
        <Card title="1" img={img1} />
        <Card title="2" img={img2} />
        <Card title="3" img={img3} />
        <Card title="4" img={img4} />
        <Card title="5" img={img5} />
        <Card title="6" img={img6} />
      </div>
    </div>
  );
}

export default CardComponent;
