import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./SetUpGame.css";

type SetUpGameProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
}

export function SetUpGame({ gameState, setGameState }: SetUpGameProps) {

    const [player, setPlayer] = useState(1);

    const [playMessage, setPlayMessage] = useState("Turn of " +gameState.players[player-1].name +".");

    const [placeShipMessage, setPlaceShipMessage] = useState("Pick a ship and a direction and then click on a cell in the map on the right to place your ship.");

    const shipsData = [
        {
          name: "1: A ship of length "+gameState.players[player-1].fleet.boats[0].length,
        },
        {
          name: "2: The second ship, of length "+gameState.players[player-1].fleet.boats[1].length,
        },
        {
          name: "3: The third ship, of length "+gameState.players[player-1].fleet.boats[2].length,
        },
        {
          name: "4: The fourth ship, of length "+gameState.players[player-1].fleet.boats[3].length,
        },
        {
          name: "5: The fifth ship, of length "+gameState.players[player-1].fleet.boats[4].length,
        }
    ];
      
    const ships = shipsData.map((ship) => (
        <option key={ship.name} value={ship.name}>
            {ship.name}
        </option>
    ));

    const [ship, setShipSelected] = useState({
        name: "1: The first ship, of length "+gameState.players[player-1].fleet.boats[0].length
    });
      
    function handleShipChange(event: { target: { value: any; }; }) {
        setShipSelected(data => ({ name: event.target.value }));
        console.log(ship);
        setPlaceShipMessage("");
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

    const [direction, setDirectionSelected] = useState(
        "North"
    );
      
    function handleDirectionChange(event: { target: { value: any; }; }) {
        setDirectionSelected(data => (event.target.value ));
    }

    async function placeShip(x: any,y: any) {
        var shipIndex = parseInt(ship.name.charAt(0))-1;
        console.log(player);
        console.log(shipIndex);
        console.log(direction);
        console.log(x);
        console.log(y);
        if (gameState.players[player-1].fleet.boats[shipIndex].placed) {
            setPlaceShipMessage("This ship is already placed. This cannot be made undone (yet). Choose another ship that is not placed yet.");
        }
        else {
            try {
                const response = await fetch('battleship/api/placeship', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({playerIndex: player,shipIndex: shipIndex,direction: direction,xEntry: x,yEntry: y})
                });

                if (response.ok) {
                    const gameState = await response.json();
                    setGameState(gameState);
                    console.log(gameState);
                    if (gameState.players[player-1].fleet.placed) {
                        setPlayer(2);
                        setPlayMessage("Turn of " +gameState.players[player-1].name +".")
                    }
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
                Direction: <select value={direction} onChange={handleDirectionChange}>
                    {directions}
                </select>
                <br></br>
                {placeShipMessage}
            </div>
            <div className="column" id="map">
                <div className ="total-btn-group">
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][0].available}
                        onClick={()=>placeShip(0,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][0].available} 
                        onClick={()=>placeShip(1,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][0].available}
                        onClick={()=>placeShip(2,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][0].available}
                        onClick={()=>placeShip(3,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][0].available}
                        onClick={()=>placeShip(4,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][0].available}
                        onClick={()=>placeShip(5,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][0].available}
                        onClick={()=>placeShip(6,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][0].available}
                        onClick={()=>placeShip(7,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][0].available}
                        onClick={()=>placeShip(8,0)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][0].available}
                        onClick={()=>placeShip(9,0)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][1].available}
                        onClick={()=>placeShip(0,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][1].available}
                        onClick={()=>placeShip(1,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][1].available}
                        onClick={()=>placeShip(2,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][1].available}
                        onClick={()=>placeShip(3,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][1].available}
                        onClick={()=>placeShip(4,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][1].available}
                        onClick={()=>placeShip(5,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][1].available}
                        onClick={()=>placeShip(6,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][1].available}
                        onClick={()=>placeShip(7,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][1].available}
                        onClick={()=>placeShip(8,1)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][1].available}
                        onClick={()=>placeShip(9,1)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][2].available}
                        onClick={()=>placeShip(0,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][2].available}
                        onClick={()=>placeShip(1,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][2].available}
                        onClick={()=>placeShip(2,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][2].available}
                        onClick={()=>placeShip(3,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][2].available}
                        onClick={()=>placeShip(4,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][2].available}
                        onClick={()=>placeShip(5,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][2].available}
                        onClick={()=>placeShip(6,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][2].available}
                        onClick={()=>placeShip(7,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][2].available}
                        onClick={()=>placeShip(8,2)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][2].available}
                        onClick={()=>placeShip(9,2)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][3].available}
                        onClick={()=>placeShip(0,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][3].available}
                        onClick={()=>placeShip(1,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][3].available}
                        onClick={()=>placeShip(2,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][3].available}
                        onClick={()=>placeShip(3,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][3].available}
                        onClick={()=>placeShip(4,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][3].available}
                        onClick={()=>placeShip(5,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][3].available}
                        onClick={()=>placeShip(6,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][3].available}
                        onClick={()=>placeShip(7,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][3].available}
                        onClick={()=>placeShip(8,3)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][3].available}
                        onClick={()=>placeShip(9,3)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][4].available}
                        onClick={()=>placeShip(0,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][4].available}
                        onClick={()=>placeShip(1,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][4].available}
                        onClick={()=>placeShip(2,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][4].available}
                        onClick={()=>placeShip(3,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][4].available}
                        onClick={()=>placeShip(4,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][4].available}
                        onClick={()=>placeShip(5,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][4].available}
                        onClick={()=>placeShip(6,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][4].available}
                        onClick={()=>placeShip(7,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][4].available}
                        onClick={()=>placeShip(8,4)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][4].available}
                        onClick={()=>placeShip(9,4)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][5].available}
                        onClick={()=>placeShip(0,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][5].available}
                        onClick={()=>placeShip(1,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][5].available}
                        onClick={()=>placeShip(2,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][5].available}
                        onClick={()=>placeShip(3,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][5].available}
                        onClick={()=>placeShip(4,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][5].available}
                        onClick={()=>placeShip(5,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][5].available}
                        onClick={()=>placeShip(6,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][5].available}
                        onClick={()=>placeShip(7,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][5].available}
                        onClick={()=>placeShip(8,5)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][5].available}
                        onClick={()=>placeShip(9,5)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][6].available}
                        onClick={()=>placeShip(0,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][6].available}
                        onClick={()=>placeShip(1,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][6].available}
                        onClick={()=>placeShip(2,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][6].available}
                        onClick={()=>placeShip(3,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][6].available}
                        onClick={()=>placeShip(4,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][6].available}
                        onClick={()=>placeShip(5,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][6].available}
                        onClick={()=>placeShip(6,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][6].available}
                        onClick={()=>placeShip(7,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][6].available}
                        onClick={()=>placeShip(8,6)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][6].available}
                        onClick={()=>placeShip(9,6)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][7].available}
                        onClick={()=>placeShip(0,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][7].available}
                        onClick={()=>placeShip(1,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][7].available}
                        onClick={()=>placeShip(2,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][7].available}
                        onClick={()=>placeShip(3,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][7].available}
                        onClick={()=>placeShip(4,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][7].available}
                        onClick={()=>placeShip(5,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][7].available}
                        onClick={()=>placeShip(6,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][7].available}
                        onClick={()=>placeShip(7,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][7].available}
                        onClick={()=>placeShip(8,7)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][7].available}
                        onClick={()=>placeShip(9,7)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][8].available}
                        onClick={()=>placeShip(0,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][8].available}
                        onClick={()=>placeShip(1,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][8].available}
                        onClick={()=>placeShip(2,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][8].available}
                        onClick={()=>placeShip(3,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][8].available}
                        onClick={()=>placeShip(4,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][8].available}
                        onClick={()=>placeShip(5,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][8].available}
                        onClick={()=>placeShip(6,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][8].available}
                        onClick={()=>placeShip(7,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][8].available}
                        onClick={()=>placeShip(8,8)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][8].available}
                        onClick={()=>placeShip(9,8)}></button>
                    </div>
                    <div className="btn-group">
                        <button data-status={gameState.players[player-1].setUpMap[0][9].available}
                        onClick={()=>placeShip(0,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[1][9].available}
                        onClick={()=>placeShip(1,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[2][9].available}
                        onClick={()=>placeShip(2,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[3][9].available}
                        onClick={()=>placeShip(3,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[4][9].available}
                        onClick={()=>placeShip(4,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[5][9].available}
                        onClick={()=>placeShip(5,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[6][9].available}
                        onClick={()=>placeShip(6,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[7][9].available}
                        onClick={()=>placeShip(7,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[8][9].available}
                        onClick={()=>placeShip(8,9)}></button>
                        <button data-status={gameState.players[player-1].setUpMap[9][9].available}
                        onClick={()=>placeShip(9,9)}></button>
                    </div>
                </div>
            </div>
        </div> 
    )
}


