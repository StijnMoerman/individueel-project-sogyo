import React, { useState } from "react";
import type { GameState } from "../gameState";
import "./StartGame.css";

type StartGameProps = {
    setGameState(newGameState: GameState): void;
}

export function StartGame({ setGameState }: StartGameProps) {

    const [errorMessage, setErrorMessage] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [gameID, setGameID] = useState("");

    async function tryStartGame(e: React.FormEvent) {
        e.preventDefault(); // Prevent default browser behavior of submitting forms
        if (!playerName) {
            setErrorMessage("A name is required for players");
            return;
        }
        if ((e.target as HTMLTextAreaElement).className == "joinGameButton" && !gameID ) {
            setErrorMessage("A gameID is required to join a game");
            return;
        }
        setErrorMessage("");

        if ((e.target as HTMLTextAreaElement).className == "joinGameButton") {
            joinGame();
        }
        else {
            startNewGame();
        }
    }

        

    async function startNewGame() {
        try {
            const response = await fetch('battleship/api/start', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({playerName: playerName})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                console.log(gameState);
            } else {
                console.error(response.statusText);
            }
        } 
        catch (error) {
            if (error instanceof Error) {
                console.error(error.toString());
            } else {
                console.log('Unexpected error', error);
            }
        }
    }

        
    async function joinGame() {
        try {
            const response = await fetch('battleship/api/join', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nameplayer: playerName , gameID: gameID})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                console.log(gameState);
            } else {
                console.error(response.statusText);
            }
        } 
        catch (error) {
            if (error instanceof Error) {
                console.error(error.toString());
            } else {
                console.log('Unexpected error', error);
            }
        }
    }


    return (
        <form onSubmit={(e) => tryStartGame(e)}>
            <input value={playerName}
                placeholder="Player name"
                onChange={(e) => setPlayerName(e.target.value)}
            />

            <input value={gameID}
                placeholder="Fill in GameID"
                onChange={(e) => setGameID(e.target.value)}
            />

            <p className="errorMessage">{errorMessage}</p>

            <button className="startGameButton" type="submit">
                Start a Battleship game!
            </button>
            
            <button className="joinGameButton" type="submit">
                Join this Battleship game!
            </button>
        </form>
    )
}