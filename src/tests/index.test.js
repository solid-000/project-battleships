import { Ship } from "..";

const testShip = new Ship(2);

test("Hit", () => {
  expect(testShip.hit()).toBe(1);
});

test("Sink - 1st", () => {
  expect(testShip.isSunk()).toBe(false);
});

test("Sink - 2st", () => {
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
