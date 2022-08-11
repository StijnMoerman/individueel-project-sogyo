import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./Play.css";

type PlayProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
    refreshIntervalID: any;
}

export function Play({ gameState, setGameState, refreshIntervalID }: PlayProps) {

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[0].name +". ");
    const [hitOrMissMessage, setHitOrMissMessage] = useState("");
    const [player, setPlayer] = useState(gameState.activePlayerIndex);
    const [beginInterval,setBeginInterval] = useState(false);


    async function hitSpot (xEntry: number, yEntry: number) {
        try {
            const response = await fetch('battleship/api/hitspot', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({xEntry: xEntry,yEntry: yEntry, gameID: gameState.gameID, playerIndex: gameState.activePlayerIndex})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                if (gameState.gameStatus.endOfGame) {
                    setPlayMessage("We have a winner! Congrats to "+gameState.gameStatus.winner +"!");
                    clearInterval(refreshIntervalID);
                }
                else if (gameState.players[0].hasTurn) {
                    setPlayMessage("Turn of " +gameState.players[0].name +". ");
                }
                else {
                    setPlayMessage("Turn of " +gameState.players[1].name +". ");
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

    const renderKeys = (rowval: number, varPlayer: number) => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => { // here you return the new array created by map
            return <button data-status={gameState.players[varPlayer].guessMap[val][rowval].status} 
            disabled = {!gameState.players[varPlayer].hasTurn || gameState.players[varPlayer].guessMap[val][rowval].status != 'unknown' || 
            gameState.gameStatus.endOfGame || varPlayer+1 != player}
            onClick={()=>hitSpot(val,rowval)}></button>
        });
    };

    const rowKeys = (varPlayer: number) => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => {
            return <div className="btn-group">{renderKeys(val,varPlayer)}</div>
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


