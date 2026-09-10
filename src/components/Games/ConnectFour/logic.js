export const ROWS = 6;
export const COLS = 7;
export const PLAYER = 'R';
export const COMPUTER = 'Y';

export const emptyBoard = () => Array(ROWS * COLS).fill(null);

export const at = (board, row, col) => board[row * COLS + col];

export const landingRow = (board, col) => {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (!at(board, row, col)) return row;
    }
    return -1;
};

export const playable = (board) => {
    const open = [];
    for (let col = 0; col < COLS; col++) {
        if (landingRow(board, col) !== -1) open.push(col);
    }
    return open;
};

export const drop = (board, col, token) => {
    const row = landingRow(board, col);
    if (row === -1) return null;
    const next = board.slice();
    next[row * COLS + col] = token;
    return next;
};

const DIRECTIONS = [[0, 1], [1, 0], [1, 1], [1, -1]];

export const findWin = (board, token) => {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (at(board, row, col) !== token) continue;
            for (const [dr, dc] of DIRECTIONS) {
                const cells = [];
                for (let step = 0; step < 4; step++) {
                    const r = row + dr * step;
                    const c = col + dc * step;
                    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) break;
                    if (at(board, r, c) !== token) break;
                    cells.push(r * COLS + c);
                }
                if (cells.length === 4) return cells;
            }
        }
    }
    return null;
};

export const chooseMove = (board) => {
    const options = playable(board);
    if (options.length === 0) return -1;

    for (const col of options) {
        const next = drop(board, col, COMPUTER);
        if (next && findWin(next, COMPUTER)) return col;
    }
    for (const col of options) {
        const next = drop(board, col, PLAYER);
        if (next && findWin(next, PLAYER)) return col;
    }
    const byCentre = [3, 2, 4, 1, 5, 0, 6].filter((c) => options.includes(c));
    return byCentre[0];
};
