class Ship {
  constructor(length, name) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.id = getId();
  }

  hit() {
    this.hits += 1;
    if (this.isSunk()) {
      console.log(`${this.name} has sunk.`);
    }
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}

class GameBoard {
  constructor() {
    this.grid = makeGrid();
    this.missHistory = [];
    this.ships = {
      carrier: new Ship(5, "Carrier"),
      battleship: new Ship(4, "Battleship"),
      destroyer: new Ship(3, "Destroyer"),
      submarine: new Ship(3, "Submarine"),
      patrolBoat: new Ship(2, "Patrol Boat"),
    };
  }

  placeShip(ship, posX, posY, orientation) {
    let x = posX;
    let y = posY;
    if (x > 10 || y > 10 || x < 1 || y < 1) {
      throw new Error("Out of Bounds.");
    }
    if (orientation === "h") {
      for (let i = 1; i <= ship.length; i++) {
        let tile = this.grid.get(JSON.stringify([posX, posY]));
        if (tile.occupied === true) throw new Error("Tile already occupied.");
        tile.occupied = true;
        tile.occupiedBy = ship;
        posY += 1;
      }
    }
    if (orientation === "v") {
      for (let i = 1; i <= ship.length; i++) {
        let tile = this.grid.get(JSON.stringify([posX, posY]));
        if (tile.occupied === true) throw new Error("Tile already occupied.");
        tile.occupied = true;
        tile.occupiedBy = ship;
        posX += 1;
      }
    }
  }

  receiveAttack(x, y) {
    let tile = this.grid.get(JSON.stringify([x, y]));
    if (tile.occupied === true) {
      for (let key in this.ships) {
        let ship = this.ships[key];
        if (tile.occupiedBy.id === ship.id) {
          ship.hit();
          break;
        }
      }
    } else {
      this.missHistory.push([x, y]);
    }
    tile.attacked = true;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
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
        attacked: false,
      });
    }
  }

  return res;
}

function getNeighbors(key) {
  let i = key[0];
  let j = key[1];
  let res = [];

  function checkBounds(tile) {
    if (tile >= 1 && tile <= 10) {
      return true;
    } else {
      return false;
    }
  }

  if (checkBounds(i + 1)) res.push([i + 1, j]);
  if (checkBounds(j + 1)) res.push([i, j + 1]);
  if (checkBounds(i - 1)) res.push([i - 1, j]);
  if (checkBounds(j - 1)) res.push([i, j - 1]);

  return res;
}

function getId() {
  return Math.floor(1000 + Math.random() * 9000);
}

export { Ship, GameBoard, Player };
