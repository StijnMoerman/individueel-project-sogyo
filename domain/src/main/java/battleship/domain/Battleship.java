package battleship.domain;

public interface Battleship {
    public static final int NO_PLAYERS = 0;
    public static final int PLAYER_ONE = 1;
    public static final int PLAYER_TWO = 2;
    public static final int BOTH_PLAYERS = 3;

	/**
	 * Method indicating if the first player has the next turn or not.
	 * If player 1 is not in turn, then player 2 is in turn.
     * @param player, the player which you want to know the turn for.
	 * @return True if the first player has the next turn, false if it's the turn of the other player.
	 */
	boolean isPlayersTurn(int player);


	/**
	 * Method for retrieving whether the game has ended or not.
	 * 
	 * @return True is the game has ended otherwise False.
	 */
	boolean isEndOfGame();

	/**
	 * Method for retrieving the player that has won the game.
	 * 
	 * @return Integer value representing which player(s) (if any) won the game.
	 */
	int getWinner();

}
