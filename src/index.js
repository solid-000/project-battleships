"use strict";
import "./styles.css";
import { Player } from "./modules/factory";
import { initiateDomGrid, grid1, grid2 } from "./modules/dom";

const player1 = new Player("solid");
const player2 = new Player("solid");
initiateDomGrid(grid1, player1);
initiateDomGrid(grid2, player2);
// player1.board.placeShip(player.board.ships.carrier, 1, 1, "h");
// player1.board.receiveAttack(1, 1);

export { player1, player2 };
console.log(player1);
