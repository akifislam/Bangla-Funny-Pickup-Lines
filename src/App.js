import "./App.css";
import { Button, Navbar, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { useState } from "react";
import RiponSong from "./test.mp3";
import { useEffect } from "react";

function App() {
  const dialogues = [
    {
      dialogue: ["আমি মিষ্টি", "তুমি দই", "দিব প্রেম", "যাও কই"],
    },
  ];

  const trimDialogue = (dialogue) => {
    return trimDialogue.split(",").join("\n");
  };

  const playSong = ()=> {
    let song = new Audio(RiponSong);
    song.play();
    console.log("Playing");
  };

  return (
    <div>
      <audio id="background-video" loop autoPlay>
        <source src={RiponSong} type="mp3" />
      </audio>
      <div className="header">
      <h1>Ripon Da Random Pickup Lines </h1>
      
      <div className="Button">
        <Button type="submit" variant="primary" size="lg">
          Get One 😎
        </Button>
        <Button type="submit" variant="primary" size="lg" onClick={playSong}>
          Play Song 😎
        </Button>
      </div>
    </div>
    

      <div className="ripon-data">
        {dialogues.map((item) => item.dialogue.map((line) => <h1>{line}</h1>))}
      </div>
    </div>
  );
}

export default App;
