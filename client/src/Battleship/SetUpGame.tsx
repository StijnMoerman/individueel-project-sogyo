import React, { useState , useRef } from "react";
import type { GameState } from "../gameState";
import "./SetUpGame.css";

type SetUpGameProps = {
    gameState: GameState;
    setGameState(newGameState: GameState): void;
    setRefreshIntervalID(newRefreshIntervalID: any): void;
    refreshIntervalID: any;
}

export function SetUpGame({ gameState, setGameState, setRefreshIntervalID, refreshIntervalID }: SetUpGameProps) {

    const [player, setPlayer] = useState(gameState.activePlayerIndex);
    const [playMessage, setPlayMessage] = useState("Time to place your fleet.");
    const [placeShipMessage, setPlaceShipMessage] = useState("");
    const confirmButton = useRef<HTMLButtonElement>(null);
    const placeMessage = useRef<HTMLParagraphElement>(null);
    const [beginInterval,setBeginInterval] = useState(false);
    var refreshID: any;

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
                    body: JSON.stringify({playerIndex: player,shipIndex: shipIndex,direction: direction,xEntry: x,yEntry: y, gameID: gameState.gameID})
                });

                if (response.ok) {
                    const gameState = await response.json();
                    setGameState(gameState);
                    setPlaceShipMessage("");
                    console.log(gameState);
                    if (gameState.players[player-1].fleet.placed) {
                        if (confirmButton.current != null) {
                            confirmButton.current.style.display = "inline";
                        }
                    }
                } else {
                    console.error(response.statusText);
                    setPlaceShipMessage("This is not a valid placement for this ship");
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

    async function confirmPlacement() {
        try {
            const response = await fetch('battleship/api/confirm', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({gameID: gameState.gameID, playerIndex: player})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                setPlaceShipMessage("Wait for the other player to confirm their placement");
                console.log(gameState);
                if (confirmButton.current != null) {
                    confirmButton.current.style.display = "none";
                }
                if (placeMessage.current != null) {
                    placeMessage.current.style.color = "blue";
                }
                if (!beginInterval) {
                    console.log("Begin refresh");
                    refreshID = setInterval(refresh,1000);
                    setRefreshIntervalID(refreshID);
                    setBeginInterval(true);
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

    
    async function refresh () {
        try {
            const response = await fetch('battleship/api/refresh', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({gameID: gameState.gameID, playerIndex: gameState.activePlayerIndex})
            });

            if (response.ok) {
                const gameState = await response.json();
                setGameState(gameState);
                if (gameState.gameStatus.endOfGame) {
                    setPlayMessage("We have a winner! Congrats to "+gameState.gameStatus.winner +"!");
                    clearInterval(refreshID);
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


    
    const renderKeys = (rowval: number) => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => { // here you return the new array created by map
            return <button data-status={gameState.players[player-1].setUpMap[val][rowval].status}
            disabled={gameState.players[player-1].setUpMap[val][rowval].status!='available'}
            onClick={()=>placeShip(val,rowval)}></button>
        });
    };

    const rowKeys = () => {
        var arr = [0,1,2,3,4,5,6,7,8,9]
        return arr.map((val) => {
            return <div className="btn-group">{renderKeys(val)}</div>
        });
    };

    return (
        <div className="row">
            <div className="column" id="options">
                <h2>Set up your fleet!</h2>
                Welcome to a new game of Battleship with gameID {gameState.gameID}! {playMessage} Pick a ship and a direction and then click on a cell in the map to place your ship. 
                <br></br>
                Ships: <select value={ship.name} onChange={handleShipChange}>
                    {ships}
                </select>
                <br></br>
                Direction: <select value={direction} onChange={handleDirectionChange}>
                    {directions}
                </select>
                <br></br>
                <p className="placeShipMessage" ref={placeMessage}>{placeShipMessage}</p>
                <button className="confirm" ref={confirmButton}
                    style={{display: "none"}} onClick={()=>confirmPlacement()}> Confirm </button>

            </div>
            <div className="column" id="map">
                <div className ="total-btn-group">
                    {rowKeys()}
                </div>
            </div>
        </div> 
    )
}


