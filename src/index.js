import { knightMoves } from "./knightMoves.js";

const form = document.getElementById("form");

const getData = () => {
	const fromX = Number(document.getElementById("fromX").value);
	const fromY = Number(document.getElementById("fromY").value);
	const toX = Number(document.getElementById("toX").value);
	const toY = Number(document.getElementById("toY").value);
	console.log(fromX, fromY, toX, toY);
	knightMoves([fromX, fromY], [toX, toY]);
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	getData();
	console.log("form submitted!");
});
