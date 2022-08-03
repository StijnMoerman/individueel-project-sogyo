import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./Play.css";

type PlayProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function Play({ gameState, setGameState }: PlayProps) {

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[0].name +". ");
    const [hitOrMissMessage, setHitOrMissMessage] = useState("");
    const [player, setPlayer] = useState(1);


    async function hitSpot (xEntry: number, yEntry: number) {
        try {
            const response = await fetch('battleship/api/hitspot', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({xEntry: xEntry,yEntry: yEntry})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                if (gameState.players[0].hasTurn) {
                    setPlayer(1);
                    setPlayMessage("Turn of " +gameState.players[0].name +". ");
                }
                else {
                    setPlayer(2);
                    setPlayMessage("Turn of " +gameState.players[1].name +". ");
                }
                if (gameState.gameStatus.endOfGame) {
                    setPlayMessage("We have a winner! Congrats to "+gameState.gameStatus.winner +"!");
                }
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

    const renderKeys = (rowval: number, player: number) => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => { // here you return the new array created by map
            return <button data-status={gameState.players[player].guessMap[val][rowval].status} 
            disabled = {!gameState.players[player].hasTurn || gameState.players[player].guessMap[val][rowval].status != 'unknown' || 
            gameState.gameStatus.endOfGame}
            onClick={()=>hitSpot(val,rowval)}></button>
        });
    };

    const rowKeys = (player: number) => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => {
            return <div className="btn-group">{renderKeys(val,player)}</div>
        });
    };

    return (
        <div className="row" id="return"> 
        {playMessage}
        <div className="column" id="map1">
                <div className ="total-btn-group">
                    {rowKeys(0)}
                </div>
            </div>
            <div className="column" id="map2">
                <div className ="total-btn-group">
                    {rowKeys(1)}
                </div>
            </div>
        </div>        
    )
}


