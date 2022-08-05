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

    async function tryStartGame() {
        if (!playerName) {
            setErrorMessage("A name is required for players");
            return;
        }
        setErrorMessage("");
        startNewGame();
    }

        

    async function startNewGame() {
        console.log("Make new game, with new gameID");
        try {
            const response = await fetch('battleship/api/start', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({namePlayer: playerName})
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
        if (!gameID ) {
            setErrorMessage("A gameID is required to join a game");
            return;
        }
        setErrorMessage("");

        console.log("Try to connect with game with gameID" + {gameID});
        try {
            const response = await fetch('battleship/api/join', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ namePlayer: playerName , gameID: gameID})
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
        <div >
            <input value={playerName}
                placeholder="Player name"
                onChange={(e) => setPlayerName(e.target.value)}
            />

            <input value={gameID}
                placeholder="Fill in GameID"
                onChange={(e) => setGameID(e.target.value)}
            />

            <p className="errorMessage">{errorMessage}</p>

            <button className="startGameButton" onClick={() => tryStartGame()}>
                Start a Battleship game!
            </button>
            
            <button className="joinGameButton" onClick={()=> joinGame()}>
                Join this Battleship game!
            </button>
        </div>
    )
}