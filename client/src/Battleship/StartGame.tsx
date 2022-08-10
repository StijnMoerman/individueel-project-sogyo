import React, { useState } from "react";
import { web } from "webpack";
import type { GameState } from "../gameState";
import "./StartGame.css";

type StartGameProps = {
    setGameState(newGameState: GameState): void;
    webSocket: any;
    setWebSocket(newWebSocket: WebSocket): void;
}

export function StartGame({ setGameState, webSocket, setWebSocket}: StartGameProps) {

    const [message, setMessage] = useState("");
    const [status,setStatus] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [gameID, setGameID] = useState("");

    async function connectWebSocket () {
        var wsURI = 'ws://localhost:9000/websocket/start';
        var webSocket2 = new WebSocket(wsURI);
        webSocket2.onopen = function() {
            setStatus('Connection is now open.');
            setWebSocket(webSocket2);
        };
        webSocket2.onmessage = function(event: any){
            const response = JSON.parse(event.data);
            const gameState = response;
            //setGameState(gameState);
            console.log("Dit is de response");
            console.log(gameState);
        }
        webSocket2.onerror = function(event) {
            console.error(event);
        }
        console.log(webSocket2);
    }

    async function tryStartGame() {
        if (!playerName) {
            setMessage("A name is required for players");
            return;
        }
        setMessage("");
        console.log("Make new game, with new gameID");
        if (webSocket !== undefined) {
            setStatus("");
            webSocket.send(JSON.stringify({namePlayer: playerName}));
        }
        else { 
            setStatus("No webSocket connection yet");
        }
    }

    

        
    async function joinGame() {
        if (!gameID ) {
            setMessage("A gameID is required to join a game");
            return;
        }
        setMessage("");

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
                placeholder="GameID"
                onChange={(e) => setGameID(e.target.value)}
            />


            <p className="status">{status}</p>
            <p className="message">{message}</p>

            <button className="connectWebSocket" onClick={() => connectWebSocket()}>
                Connect to WebSocket server!
            </button>
            <br></br>
            <button className="startGameButton" onClick={() => tryStartGame()}>
                Start a Battleship game!
            </button>
            <br></br>
            <button className="joinGameButton" onClick={()=> joinGame()}>
                Join this Battleship game!
            </button>
        </div>
    )
}