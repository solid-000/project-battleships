"use strict";
import "./styles.css";
import { Player } from "./modules/factory";

const player = new Player("solid");
player.board.placeShip(player.board.ships.carrier, 1, 1, "h");

player.board.receiveAttack(1, 1);
player.board.receiveAttack(1, 2);
player.board.receiveAttack(1, 3);
player.board.receiveAttack(1, 4);
player.board.receiveAttack(1, 5);

console.log(player);
