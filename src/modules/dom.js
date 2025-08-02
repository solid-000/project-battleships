import { player1 } from "..";

const grid1 = document.querySelector(".p1-grid");
const grid2 = document.querySelector(".p2-grid");

function initiateDomGrid(domTarget, userTarget) {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      let tile = document.createElement("div");
      tile.classList.add("tile");
      tile.setAttribute("coords", JSON.stringify([i, j]));
      tile.addEventListener("click", () => {
        userTarget.board.receiveAttack(i, j);
      });
      domTarget.append(tile);
    }
  }
}

export { initiateDomGrid, grid1, grid2 };
