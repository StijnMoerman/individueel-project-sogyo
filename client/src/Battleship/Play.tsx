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
        if (gameState.players[0].hasTurn) {
            setPlayer(1);
        }
        else {
            setPlayer(2);
        }
    }

    return (
        <div> Let's play the game! {playMessage}
        Pick a spot a try to hit a ship!
        {hitOrMissMessage}
        <div className="column" id="map">
                <div className ="total-btn-group">
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][0].status}
                        onClick={()=>hitSpot(0,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][0].status} 
                        onClick={()=>hitSpot(1,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][0].status}
                        onClick={()=>hitSpot(2,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][0].status}
                        onClick={()=>hitSpot(3,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][0].status}
                        onClick={()=>hitSpot(4,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][0].status}
                        onClick={()=>hitSpot(5,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][0].status}
                        onClick={()=>hitSpot(6,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][0].status}
                        onClick={()=>hitSpot(7,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][0].status}
                        onClick={()=>hitSpot(8,0)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][0].status}
                        onClick={()=>hitSpot(9,0)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][1].status}
                        onClick={()=>hitSpot(0,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][1].status}
                        onClick={()=>hitSpot(1,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][1].status}
                        onClick={()=>hitSpot(2,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][1].status}
                        onClick={()=>hitSpot(3,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][1].status}
                        onClick={()=>hitSpot(4,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][1].status}
                        onClick={()=>hitSpot(5,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][1].status}
                        onClick={()=>hitSpot(6,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][1].status}
                        onClick={()=>hitSpot(7,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][1].status}
                        onClick={()=>hitSpot(8,1)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][1].status}
                        onClick={()=>hitSpot(9,1)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][2].status}
                        onClick={()=>hitSpot(0,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][2].status}
                        onClick={()=>hitSpot(1,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][2].status}
                        onClick={()=>hitSpot(2,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][2].status}
                        onClick={()=>hitSpot(3,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][2].status}
                        onClick={()=>hitSpot(4,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][2].status}
                        onClick={()=>hitSpot(5,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][2].status}
                        onClick={()=>hitSpot(6,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][2].status}
                        onClick={()=>hitSpot(7,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][2].status}
                        onClick={()=>hitSpot(8,2)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][2].status}
                        onClick={()=>hitSpot(9,2)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][3].status}
                        onClick={()=>hitSpot(0,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][3].status}
                        onClick={()=>hitSpot(1,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][3].status}
                        onClick={()=>hitSpot(2,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][3].status}
                        onClick={()=>hitSpot(3,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][3].status}
                        onClick={()=>hitSpot(4,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][3].status}
                        onClick={()=>hitSpot(5,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][3].status}
                        onClick={()=>hitSpot(6,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][3].status}
                        onClick={()=>hitSpot(7,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][3].status}
                        onClick={()=>hitSpot(8,3)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][3].status}
                        onClick={()=>hitSpot(9,3)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][4].status}
                        onClick={()=>hitSpot(0,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][4].status}
                        onClick={()=>hitSpot(1,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][4].status}
                        onClick={()=>hitSpot(2,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][4].status}
                        onClick={()=>hitSpot(3,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][4].status}
                        onClick={()=>hitSpot(4,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][4].status}
                        onClick={()=>hitSpot(5,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][4].status}
                        onClick={()=>hitSpot(6,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][4].status}
                        onClick={()=>hitSpot(7,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][4].status}
                        onClick={()=>hitSpot(8,4)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][4].status}
                        onClick={()=>hitSpot(9,4)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][5].status}
                        onClick={()=>hitSpot(0,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][5].status}
                        onClick={()=>hitSpot(1,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][5].status}
                        onClick={()=>hitSpot(2,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][5].status}
                        onClick={()=>hitSpot(3,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][5].status}
                        onClick={()=>hitSpot(4,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][5].status}
                        onClick={()=>hitSpot(5,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][5].status}
                        onClick={()=>hitSpot(6,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][5].status}
                        onClick={()=>hitSpot(7,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][5].status}
                        onClick={()=>hitSpot(8,5)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][5].status}
                        onClick={()=>hitSpot(9,5)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][6].status}
                        onClick={()=>hitSpot(0,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][6].status}
                        onClick={()=>hitSpot(1,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][6].status}
                        onClick={()=>hitSpot(2,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][6].status}
                        onClick={()=>hitSpot(3,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][6].status}
                        onClick={()=>hitSpot(4,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][6].status}
                        onClick={()=>hitSpot(5,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][6].status}
                        onClick={()=>hitSpot(6,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][6].status}
                        onClick={()=>hitSpot(7,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][6].status}
                        onClick={()=>hitSpot(8,6)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][6].status}
                        onClick={()=>hitSpot(9,6)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][7].status}
                        onClick={()=>hitSpot(0,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][7].status}
                        onClick={()=>hitSpot(1,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][7].status}
                        onClick={()=>hitSpot(2,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][7].status}
                        onClick={()=>hitSpot(3,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][7].status}
                        onClick={()=>hitSpot(4,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][7].status}
                        onClick={()=>hitSpot(5,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][7].status}
                        onClick={()=>hitSpot(6,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][7].status}
                        onClick={()=>hitSpot(7,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][7].status}
                        onClick={()=>hitSpot(8,7)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][7].status}
                        onClick={()=>hitSpot(9,7)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][8].status}
                        onClick={()=>hitSpot(0,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][8].status}
                        onClick={()=>hitSpot(1,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][8].status}
                        onClick={()=>hitSpot(2,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][8].status}
                        onClick={()=>hitSpot(3,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][8].status}
                        onClick={()=>hitSpot(4,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][8].status}
                        onClick={()=>hitSpot(5,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][8].status}
                        onClick={()=>hitSpot(6,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][8].status}
                        onClick={()=>hitSpot(7,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][8].status}
                        onClick={()=>hitSpot(8,8)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][8].status}
                        onClick={()=>hitSpot(9,8)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].guessMap[0][9].status}
                        onClick={()=>hitSpot(0,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[1][9].status}
                        onClick={()=>hitSpot(1,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[2][9].status}
                        onClick={()=>hitSpot(2,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[3][9].status}
                        onClick={()=>hitSpot(3,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[4][9].status}
                        onClick={()=>hitSpot(4,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[5][9].status}
                        onClick={()=>hitSpot(5,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[6][9].status}
                        onClick={()=>hitSpot(6,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[7][9].status}
                        onClick={()=>hitSpot(7,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[8][9].status}
                        onClick={()=>hitSpot(8,9)}></button>
                        <button data-status={gameState.players[player-1].guessMap[9][9].status}
                        onClick={()=>hitSpot(9,9)}></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


