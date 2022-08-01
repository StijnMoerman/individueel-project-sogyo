package battleship.domain;

public interface Battleship {
    public static final int NO_PLAYERS = 0;
    public static final int PLAYER_ONE = 1;
    public static final int PLAYER_TWO = 2;
    public static final int BOTH_PLAYERS = 3;

	
    void playerDoesTurn (int xEntry, int yEntry);


	boolean isPlayersTurn(int player);


	Player getPlayer(int player);


	boolean isEndOfGame();

	
	int getWinner();

}
