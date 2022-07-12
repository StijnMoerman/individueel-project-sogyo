
export interface GameState {
    players: [ Player, Player ]; // a player array contains exactly two Players
    gameStatus: {
        endOfGame: boolean;
        winner: string;
    };
}

interface Player {
    name: string;
    boats: Boat[];
    ownMap: SetUpMapEntry[][];
    guessMap: GuessMapEntry[][];
    type: "player1" | "player2"; // only "player1" and "player2" are valid options for this string
    hasTurn: boolean;
}

interface Boat {
    index: number;
    destroyed: boolean;
}

interface SetUpMapEntry {
    boat: boolean
    available: boolean
}

interface GuessMapEntry {
    status: "unknown" | "miss" | "hit";
}
