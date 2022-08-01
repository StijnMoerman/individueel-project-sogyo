import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./Play.css";

type PlayProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function Play({ gameState, setGameState }: PlayProps) {

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[0].name);

    return (
        <div> Let's play the game!
        </div>
    )
}


