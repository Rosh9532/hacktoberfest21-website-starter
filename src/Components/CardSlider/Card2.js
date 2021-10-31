import React from "react";
import "./card2.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import ViewCon1 from "../ViewCon/ViewCon1"
/**
 * @author krish
 * @function Card2
 **/
 
export const Card2 = (props) => {
  console.log(props.props?.costumeImgUrl);
  // get random liked count in props
  const [isLiked, setLiked] = React.useState(true);
  const [likes, setLikes] = React.useState(
    props?.props?.votes ?? Math.floor(Math.random() * 100)
  );
  const addLike = () => {
    setLiked(!isLiked);
    setLikes(likes + 1);
  };
  const removeLike = () => {
    setLiked(!isLiked);
    setLikes(likes - 1);
  };
  return (
    <div>
      {/* <div className="container"> */}
      <div className="card">
        <img
          src={
            props?.props?.costumeImgUrl ??
            "https://cdn.discordapp.com/attachments/902584923372810350/902587007925108806/D.png"
          }
          alt="Person"
          className="card__image"
        />
        <p className="card__name">{props?.props?.name}</p>
        <div className="">
          <div
            style={{
              margin: "auto",
              fontSize: "22px",
              marginBottom: "10px",
            }}
          >
            {props?.props?.costumeTitle}
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-child-followers">
            {isLiked ? (
              <AiOutlineHeart size={26} onClick={addLike} />
            ) : (
              <AiFillHeart size={26} onClick={removeLike} />
            )}
          </div>
          <div className="grid-child-followers">{likes}</div>
        </div>

        <button
          onClick={ViewCon1(props?.props?.id)}
          className="btn draw-border"
        >
          View
        </button>
        {/* on click pass obj in view model  */}
      </div>
    </div>
    // </div>
  );
};
