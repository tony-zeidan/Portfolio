export const HUMAN = 'X';
export const COMPUTER = 'O';

const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export function calculateWinner(squares) {
    for (let i = 0; i < LINES.length; i++) {
        const [a, b, c] = LINES[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const isFull = (squares) => squares.every((x) => x != null);

export const available = (squares) => {
    const free = [];
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) free.push(i);
    }
    return free;
};

const minimax = (squares, player, me, opponent, depth) => {
    const won = calculateWinner(squares);
    if (won === me) return { score: 10 - depth, move: -1 };
    if (won === opponent) return { score: depth - 10, move: -1 };

    const free = available(squares);
    if (free.length === 0) return { score: 0, move: -1 };

    const maximising = player === me;
    let best = null;

    for (const i of free) {
        const next = squares.slice();
        next[i] = player;
        const { score } = minimax(
            next,
            maximising ? opponent : me,
            me,
            opponent,
            depth + 1
        );
        if (best === null || (maximising ? score > best.score : score < best.score)) {
            best = { score, move: i };
        }
    }

    return best;
};

export const chooseMove = (squares, me = COMPUTER, opponent = HUMAN) => {
    if (available(squares).length === 0) return -1;
    return minimax(squares, me, me, opponent, 0).move;
};
