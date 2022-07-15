import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./SetUpGame.css";

type SetUpGameProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function SetUpGame({ gameState, setGameState }: SetUpGameProps) {

    const player = 1;

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[0].name +".");

    const shipsData = [
        {
          name: "1: A ship of length "+gameState.players[0].fleet.boats[0].length,
        },
        {
          name: "2: The second ship, of length "+gameState.players[0].fleet.boats[1].length,
        },
        {
          name: "3: The third ship, of length "+gameState.players[0].fleet.boats[2].length,
        },
        {
          name: "4: The fourth ship, of length "+gameState.players[0].fleet.boats[3].length,
        },
        {
          name: "5: The fifth ship, of length "+gameState.players[0].fleet.boats[4].length,
        }
    ];
      
    const ships = shipsData.map((ship) => (
        <option key={ship.name} value={ship.name}>
            {ship.name}
        </option>
    ));

    const [ship, setShipSelected] = useState({
        name: "The first ship, of length "+gameState.players[0].fleet.boats[0].length
    });
      
    function handleShipChange(event: { target: { value: any; }; }) {
        setShipSelected(data => ({ state: '', ship: event.target.value }));
    }

    const directionsData = [
        {
          direction: "North",
        },
        {
          direction: "East",
        },
        {
          direction: "South",
        },
        {
          direction: "West",
        }
    ];
      
    const directions = directionsData.map((direction) => (
        <option key={direction.direction} value={direction.direction}>
            {direction.direction}
        </option>
    ));

    const [direction, setDirectionSelected] = useState({
        direction: "North"
    });
      
    function handleDirectionChange(event: { target: { value: any; }; }) {
        setDirectionSelected(data => ({ state: '', direction: event.target.value }));
    }

    async function placeShip(x: any,y: any) {
        var shipIndex = parseInt(ship.name.charAt(0))-1;
        try {
            const response = await fetch('battleship/api/placeship', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({player,shipIndex,direction,x,y})
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
        <div className="row">
            <div className="column" id="options">
                Hi! Welcome to Battleship! Time to set up your fleet! {playMessage}
                <br></br>
                Ships: <select value={ship.name} onChange={handleShipChange}>
                    {ships}
                </select>
                <br></br>
                Direction: <select value={direction.direction} onChange={handleDirectionChange}>
                    {directions}
                </select>
            </div>
            <div className="column" id="map">
                <div className ="total-btn-group">
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][0].available}
                        onClick={()=>placeShip(0,0)}></button>
                        <button data-status={gameState.players[0].setUpMap[1][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][0].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][0].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][1].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][1].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][2].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][2].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][3].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][3].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][4].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][4].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][5].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][5].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][6].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][6].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][7].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][7].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][8].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][8].available}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[0].setUpMap[0][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[1][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[2][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[3][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[4][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[5][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[6][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[7][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[8][9].available}></button>
                        <button data-status={gameState.players[0].setUpMap[9][9].available}></button>
                    </div>
                </div>
            </div>
        </div> 
    )
}


