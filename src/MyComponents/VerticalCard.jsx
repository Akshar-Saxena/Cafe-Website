import React from "react";
import ViewButton from "./ViewButton";
import ratingImage from "../constants/ratingImages.json";

export default function VerticalCard(props) {
    const randIdx = Math.floor(Math.random() * ratingImage.length);
    return (
        <div className="verticalCardMain">
            <div className="verticalCard">
                <img src={props.image} alt="" />
                <h2>{props.title1}</h2>
                <img src={ratingImage[randIdx].src} alt="" />
                <h3>{props.title2}</h3>
            </div>
            <div className="hoverBox">
                <img src={props.image} alt="" />
                <div className="hoverContent">
                    <h1>COFFEE</h1>
                    <p>
                        Our Coffee is made from the roasted seeds of the Coffea
                        plant, which is native to tropical regions of Africa.
                    </p>
                    <ViewButton
                        title="VIEW ALL"
                        image={props.image}
                        proName={props.title1}
                        price={props.title2}
                        details={props.details}
                        list={props.list}
                    />
                </div>
            </div>
        </div>
    );
}
