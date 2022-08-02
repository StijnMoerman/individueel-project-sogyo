import type { FieldsetHTMLAttributes } from "react";

export interface GameState {
    players: [ Player, Player ]; // a player array contains exactly two Players
    gameStatus: {
        endOfGame: boolean;
        endOfSetUp: boolean;
        winner: string;
    };
}

interface Player {
    name: string;
    fleet: Fleet;
    setUpMap: SetUpMapEntry[][];
    guessMap: GuessMapEntry[][];
    type: "player1" | "player2"; // only "player1" and "player2" are valid options for this string
    hasTurn: boolean;
}

interface Fleet {
    boats: Boat[];
    placed: boolean;
} 

interface Boat {
    length: number;
    placed: boolean;
}

interface SetUpMapEntry {
    hasBoat: boolean
    available: boolean
}

interface GuessMapEntry {
    status: "unknown" | "miss" | "hit" | "sunk";
}
