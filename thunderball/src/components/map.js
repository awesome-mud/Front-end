import React, { useContext } from "react";
import PlayerContext from '../context/Player/PlayerContext'
import Sketch from "react-p5";
import axios from "axios";
import '../css/Main.css'

let car;

export default function Map() {
    const {map, player} = useContext(PlayerContext)

  let preload = p5 => {
    car = p5.loadImage("angryeyes.png");
  };

  let setup = (p5, parentRef )=> {
    p5.createCanvas(600, 600).parent(parentRef);
    p5.background(0, 0, 0, 0.5);
    p5.noStroke();
    p5.fill(125, 195, 255);
};

  let draw = p5 => {
    map.forEach(street => {
      p5.square(street.x * 60 + 15,600 - street.y * 60 - 45, 30);
      if (street.n_to) {
        p5.rect(street.x * 60 + 15,600 - (street.y + 1) * 60 - 30, 30, 50);
      }
      if (street.e_to) {
        p5.rect(street.x * 60 + 30, 600 - street.y * 60 - 45, 50, 30);
      }
    });
    p5.image(car, player.x * 60 + 10, 600 - player.y * 60 - 50, 40, 40);
  };

  return <div className='mapCanvas'> <Sketch setup={setup} draw={draw} preload={preload} /> </div>;
}