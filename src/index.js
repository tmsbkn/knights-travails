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
	//create a visited set, add the start square
	const visited = new Set([start.toString()]);

	//	while queue is not empty:
	while (queue.length > 0) {
		//  dequeue the first path
		const path = queue.shift();
		//	get the last square in that path
		const current = path[path.length - 1];
		//  if the current square equals target, return the path
		if (current[0] === target[0] && current[1] === target[1]) {
			printResult(path);
			return path;
		}

		//  otherwise, get all valid knight moves from that square
		for (const move of validMoves(current)) {
			const key = move.toString();
			//  for each move not already visited:
			if (!visited.has(key)) {
				//  mark it visited
				visited.add(key);
				//  push a new path (old path + this move) onto the queue
				queue.push([...path, move]);
			}
		}
	}
};

const printResult = (path) => {
	console.log(`You made it in ${path.length} moves! Here is your path`);
	path.forEach((square) => {
		console.log(square);
	});
};

knightMoves([2, 4], [0, 0]);
