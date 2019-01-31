//sets up the reusable FriendCard component
import React from "react";
import "./characterCard.css";


//pass the image into each card so all 12 are rendered
const CharCard = props => (
  <div className="column-test" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../assests/" + props.image)} />
    </div>
  </div>
);

export default CharCard;
