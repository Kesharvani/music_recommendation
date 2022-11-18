import "./styles.css";
import React, { useState } from "react";

var classicalDictionary = {
  "Raag jayajavanti": "4.5/5",
  "Raag Khamaj": "4/5",
  "Raag Yaman": "4.3/5",
};

var westernDictionary = {
  "My heart is beating": "4.2/5",
  "I believe in music": "4.1/5",
  "My heart will go on": "3/5",
};

var semiClassicalDictionary = {
  "Moh Moh ke dhage": "4.9/5",
  "Tumko dekha to ye khyal aaya": "4.5/5",
  "Aaye ho meri jindagi me": "3.5/5",
};

var classicalDictionaryArray = Object.keys(classicalDictionary);
var westernDictionaryArray = Object.keys(westernDictionary);
var semiClassicalDictionaryArray = Object.keys(semiClassicalDictionary);

export default function App() {
  const [classicalsongrating, setClassicalSongRating] = useState("");
  function classicalHandler() {
    setClassicalSongRating(
      <ul style={{ listStyleType: "none" }}>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {classicalDictionaryArray[0]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {classicalDictionary[classicalDictionaryArray[0]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {classicalDictionaryArray[1]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {classicalDictionary[classicalDictionaryArray[1]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {classicalDictionaryArray[2]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {classicalDictionary[classicalDictionaryArray[2]]}
          </span>
        </li>
      </ul>
    );
  }

  function westernHandler() {
    setClassicalSongRating(
      <ul style={{ listStyleType: "none" }}>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {westernDictionaryArray[0]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {westernDictionary[westernDictionaryArray[0]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {westernDictionaryArray[1]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {westernDictionary[westernDictionaryArray[1]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {westernDictionaryArray[2]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {westernDictionary[westernDictionaryArray[2]]}
          </span>
        </li>
      </ul>
    );
  }

  function semiClassicalHandler() {
    setClassicalSongRating(
      <ul style={{ listStyleType: "none" }}>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {semiClassicalDictionaryArray[0]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {semiClassicalDictionary[semiClassicalDictionaryArray[0]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {semiClassicalDictionaryArray[1]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {semiClassicalDictionary[semiClassicalDictionaryArray[1]]}
          </span>
        </li>
        <li
          style={{
            listStyleType: "none",
            padding: "1rem",
            width: "70%",
            margin: "1rem 0rem",
            borderRadius: "0.5rem",
            backgroundColor: "#efefef",
          }}
        >
          {semiClassicalDictionaryArray[2]}
          <span style={{ fontWeight: "bold", margin: "10px" }}>
            {semiClassicalDictionary[semiClassicalDictionaryArray[2]]}
          </span>
        </li>
      </ul>
    );
  }

  return (
    <div className="App" style={{ display: "block", float: "center" }}>
      <h1>🎵 Good Music</h1>
      <p
        style={{
          fontSize: "smaller",
          margin: "1rem 0.3rem",
          marginLeft: "2.5rem",
        }}
      >
        Checkout My favourite music. Select a genre to get started
      </p>

      <div style={{ display: "block", width: "70%%", height: "70%" }}>
        <button
          style={{
            cursor: "pointer",
            background: "rgb(229, 231, 235)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem",
          }}
          onClick={classicalHandler}
        >
          Classical{" "}
        </button>
        <button
          style={{
            cursor: "pointer",
            background: "rgb(229, 231, 235)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem",
          }}
          onClick={westernHandler}
        >
          Western
        </button>
        <button
          style={{
            cursor: "pointer",
            background: "rgb(229, 231, 235)",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            border: "1px solid black",
            margin: "1rem 0.3rem",
          }}
          onClick={semiClassicalHandler}
        >
          SemiClassical
        </button>
      </div>
      <hr />
      <div style={{ display: "block" }}>{classicalsongrating}</div>
    </div>
  );
}
