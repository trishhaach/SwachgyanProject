import React, { useState, useEffect } from "react";
import "./Games.css";
import bk from "../../assests/bk.png";
import playGame from "../../assests/PlayGame.png";
import RecyclabilityChecker from "../BinSort/BinSort";
import binSortCover from "../../assests/BinSortGame.png";

const Games = () => {
  const [gameStep, setGameStep] = useState("playGame"); // Track the current step of the game
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [solvedIndices, setSolvedIndices] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);

  const emojis = [
    "🍕",
    "🥦",
    "🍏",
    "🥕",
    "🥫",
    "📦",
    "🥤",
    "🚗",
    "🍃",
    "🌱",
    "📱",
    "🎮",
  ];

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const selectedEmojis = emojis.slice(0, 6);
    const pairs = [...selectedEmojis, ...selectedEmojis];
    const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
    setShuffledPairs(shuffledPairs);
    setFlippedIndices([]);
    setSolvedIndices([]);
    setShowCongratulations(false);
  };

  const handleClick = (index) => {
    if (gameStep !== "memoryGame") return;

    if (!solvedIndices.includes(index) && !flippedIndices.includes(index)) {
      const newFlippedIndices = [...flippedIndices, index];
      setFlippedIndices(newFlippedIndices);

      if (newFlippedIndices.length === 2) {
        const [firstIndex, secondIndex] = newFlippedIndices;
        if (shuffledPairs[firstIndex] === shuffledPairs[secondIndex]) {
          setSolvedIndices([...solvedIndices, firstIndex, secondIndex]);
          setFlippedIndices([]);
          if (solvedIndices.length + 2 === shuffledPairs.length) {
            setShowCongratulations(true);
          }
        } else {
          setTimeout(() => {
            setFlippedIndices([]);
          }, 1000);
        }
      }
    }
  };

  const renderBoxes = () => {
    return shuffledPairs.map((emoji, index) => {
      const isFlipped = flippedIndices.includes(index);
      const isSolved = solvedIndices.includes(index);

      return (
        <div
          key={index}
          className={`item ${isFlipped || isSolved ? "flip" : ""}`}
          onClick={() => handleClick(index)}
        >
          {isFlipped || isSolved ? emoji : ""}
        </div>
      );
    });
  };

  return (
    <div
      className="Gcontainer"
      style={{
        backgroundImage: `url(${bk})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2></h2>
      {gameStep === "playGame" && (
        <div className="play-game" onClick={() => setGameStep("squareBox")}>
          <img src={playGame} alt="Play Game" />
        </div>
      )}
      {gameStep === "squareBox" && (
        <div className="square-wrapper">
          <div
            className="square-box memory-game-box"
            onClick={() => setGameStep("memoryGame")}
          ></div>
          <div
            className="square-box bin-sort-box"
            onClick={() => setGameStep("binSort")}
          ></div>
        </div>
      )}
      {gameStep === "memoryGame" && (
        <div className="memory-game-container">
          <div className="memoryGame">{renderBoxes()}</div>
          <button className="reset" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
      {gameStep === "binSort" && (
        <>
          <RecyclabilityChecker />
        </>
      )}
      {showCongratulations && (
        <div className="congratulations">
          <p>Congratulations! You made it!</p>
          <button onClick={() => setShowCongratulations(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Games;
