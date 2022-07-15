import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./SetUpGame.css";

type SetUpGameProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function SetUpGame({ gameState, setGameState }: SetUpGameProps) {

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[0].name +" .");

    return (
        <div className="row">
            <div className="column">
                Hi! Welcome to Battleship! Time to set up your fleet! {playMessage}
                <br></br>
                Ships: 
                <select name="ships" id="ship">
                    <option value="" > Select ship to place </option>
                </select>
                <br></br>
                Direction: 
                <select name="directions" id="direction">
                    <option value="" > Select direction to place the ship </option>
                </select>
            </div>
            <div className="column">
                <table>
                    <tbody>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][0].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][0].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][1].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][1].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][2].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][2].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][3].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][3].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][4].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][4].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][5].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][5].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][6].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][6].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][7].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][7].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][8].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][8].available}></td>
                        </tr>
                        <tr>
                            <td data-status={gameState.players[0].setUpMap[0][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[1][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[2][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[3][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[4][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[5][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[6][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[7][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[8][9].available}></td>
                            <td data-status={gameState.players[0].setUpMap[9][9].available}></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 

    )
}


