import React, { useState, useEffect } from "react";
import { Card2 } from "./Card2";
import Slider from "./Cards";
import API from "../../API/API";
/**
 * @author
 * @function CardSlider
 **/
export const CardSlider = (props) => {
  const [contestant, setContestant] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const { getContestants } = API;
    getContestants().then((res) => {
      setContestant(res.data);
      setLoading(false);
      // allContestant(res.data);
    });
  }, []);
  console.log(contestant);

  return (
    <div
      style={{
        display: "flex-column",
        //   alignItems: "center",
        //   justifyContent: "center",

        backgroundColor: "black",
        //   overflow: "hidden",
      }}
    >
      <div style={{ paddingTop: "2rem" }}>
        {" "}
        <Slider />
      </div>
      <h2 style={{ color: "white", display: "flex", justifyContent: "center" }}>
        Best Outfits{" "}
      </h2>
      <br /> <br />
      <div className="container">
        {!loading ? (
          contestant.length > 0 ? (
            contestant.map((con) => {
              return (
                <div key={con.id}>
                  <Card2 props={con} />
                </div>
              );
            })
          ) : (
            <div>No Contestant</div>
          )
        ) : (
          <div>Loading</div>
        )}

        <Card2 />
      </div>
    </div>
  );
};
