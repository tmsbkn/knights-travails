// Plan:
// - BFS from start, treating each queue item as a full path so far
// - stop and return as soon as the last square in a path == target
// - visited set prevents revisiting squares and infinite loops
const BOARD_SIZE = 8;
const OFFSETS = [
	[1, 2],
	[2, 1],
	[2, -1],
	[1, -2],
	[-1, -2],
	[-2, -1],
	[-2, 1],
	[-1, 2],
];
const isOnBoard = (x, y) => {
	return x >= 0 && x <= BOARD_SIZE && y >= 0 && y <= BOARD_SIZE;
};
const validMoves = ([x, y]) => {
	return OFFSETS.map(([deltaX, deltaY]) => [x + deltaX, y + deltaY]).filter(
		([newX, newY]) => isOnBoard(newX, newY),
	);
};
const knightMoves = (start, target) => {
	//create queue, initialize with a path containing just the start square
	const queue = [[start]];
	/*
	  create a visited set, add the start square

		while queue is not empty:
	    dequeue the first path
			get the last square in that path

    if that square equals target, return the path

    otherwise, get all valid knight moves from that square

    for each move not already visited:
      mark it visited
      push a new path (old path + this move) onto the queue
	*/
};
