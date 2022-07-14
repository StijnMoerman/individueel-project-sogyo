package battleship.api.models;

import battleship.domain.Battleship;

public class Player {
    public Player(battleship.domain.Battleship battleship, 
            String name, boolean isFirstPlayer) {
		this.name = name;
		type = isFirstPlayer ? "player1" : "player2";
        hasTurn = battleship.isPlayersTurn(isFirstPlayer ? 
            Battleship.PLAYER_ONE : Battleship.PLAYER_TWO);	
		int player = isFirstPlayer ? 1 : 2;
		for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 10; j++) {
				setUpMap[i][j] = new SetUpMapEntry(battleship, i, j, player);
				guessMap[i][j] = new GuessMapEntry(battleship, i, j, player);
			}
		}
		fleet = new Fleet(battleship, player);
    }
    
    String name;
	public String getName() { return name; }
	
	String type;
	public String getType() { return type; }

	boolean hasTurn;
	public boolean getHasTurn() { return hasTurn; }

	Fleet fleet;
	public Fleet getFleet() { return fleet; }

	SetUpMapEntry[][] setUpMap = new SetUpMapEntry[10][10];
	public SetUpMapEntry[][] getSetUpMap() { return setUpMap; }

	GuessMapEntry[][] guessMap = new GuessMapEntry[10][10];
	public GuessMapEntry[][] getGuessMap() { return guessMap; }

}