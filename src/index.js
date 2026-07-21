// Plan:
// - BFS from start, treating each queue item as a full path so far
// - stop and return as soon as the last square in a path == target
// - visited set prevents revisiting squares and infinite loops
const knightMoves = (start, target) => {
	/*
	  create queue, initialize with a path containing just the start square
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
