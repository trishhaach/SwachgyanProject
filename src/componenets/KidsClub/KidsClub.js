// KidsClub.js
import React from "react";
import { Link } from "react-router-dom";
import "./KidsClub.css"; // Import CSS file if necessary
import challenge from "../../assests/challenge.png";

const KidsClub = () => {
  return (
    <div className="kcontainer">
      <div className="background">
        <div className="section-left">
          <h2>Welcome to Kids Club</h2>
          <p>
            Hey there, crafty kids! 🎨✂️ Welcome to KidsClub, where fun and
            creativity never stop! 🌟<br></br>
            <br></br>
            Got a cool craft to share? Join our monthly crafting challenges! 🎉
            Whether you like painting, building, or adding sparkle, there's a
            challenge for you.<br></br> <br></br>💪 Upload your craft below and
            show off your awesome creations. 📸 Let's fill our gallery with your
            fantastic work and inspire each other! 🚀<br></br>
            <br></br>
            Let's get crafting, Kids Club style! 🎉🎨
          </p>
          <Link to="/signup">
            <button className="button">Sign Up</button>
          </Link>{" "}
          &nbsp;
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        </div>
        <div className="section-right">
          <h2>This Month's Challenge</h2>
          <p>Join our exciting challenge this month!</p>
          <img src={challenge} alt="This Month's Challenge" />
        </div>
      </div>
    </div>
  );
};

export default KidsClub;