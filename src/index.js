"use strict";
import "./styles.css";

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.id = getId();
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

class GameBoard {
  constructor() {
    this.grid = makeGrid();
  }

  placeShip(length, x, y) {
    if (x > 10 || y > 10 || x < 1 || y < 1) {
      throw new Error("Out of Bounds.");
    }
    if (length > 5) {
      throw new Error("Ship too long.");
    }
  }
}

function makeGrid() {
  let res = new Map();
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      res.set(JSON.stringify([i, j]), {
        occupied: false,
        neighbors: getNeighbors([i, j]),
        occupiedBy: 0,
      });
    }
  }

  return res;
}

function getNeighbors(key) {
  let i = key[0];
  let j = key[1];
  let res = [];

  //here
  return [
    [i + 1, j],
    [i, j + 1],
    [i - 1, j],
    [i, j - 1],
  ];
}

function getId() {
  return Math.floor(1000 + Math.random() * 9000);
}

const myShip = new Ship(5);
const myShip2 = new Ship(3);

const board = new GameBoard();
console.log(board);

export { Ship, GameBoard };
