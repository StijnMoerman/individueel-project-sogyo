package battleship.api.models;

public class Player {
    public Player(battleship.domain.Battleship battleship, 
            String name, boolean isFirstPlayer) {
		this.name = name;
		type = isFirstPlayer ? "player1" : "player2";
        hasTurn = battleship.isPlayersTurn(isFirstPlayer ? 
            battleship.PLAYER_ONE : battleship.PLAYER_TWO);
    }
    
    String name;
	public String getName() { return name; }
	
	String type;
	public String getType() { return type; }

	boolean hasTurn;
	public boolean getHasTurn() { return hasTurn; }

}