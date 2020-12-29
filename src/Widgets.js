import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div class="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Will Netflix model work for travel?",
        "Top news - 1802 readers"
      )}
      {newsArticle(
        "Vaccine passport' needed to fly?",
        "Top news - 999 readers"
      )}
      {newsArticle("Tesla hits new highs", "Cars & auto - 410 readers")}
      {newsArticle("Is Redux too good?", "Code - 216 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 6998 readers")}
    </div>
  );
}

export default Widgets;
