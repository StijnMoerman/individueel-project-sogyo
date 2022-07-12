package battleship.api.models;

import battleship.domain.Battleship;

public class Player {
    public Player(battleship.domain.Battleship battleship, 
            String name, boolean isFirstPlayer) {
		this.name = name;
		type = isFirstPlayer ? "player1" : "player2";
        hasTurn = battleship.isPlayersTurn(isFirstPlayer ? 
            Battleship.PLAYER_ONE : Battleship.PLAYER_TWO);
    }
    
    String name;
	public String getName() { return name; }
	
	String type;
	public String getType() { return type; }

	boolean hasTurn;
	public boolean getHasTurn() { return hasTurn; }

}