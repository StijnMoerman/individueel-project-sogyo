package battleship.domain;

public class BattleshipImpl implements Battleship {
    Player firstPlayer = new Player();
    Player playerOnTurn = firstPlayer;
    boolean endOfSetUp = false;

    public BattleshipImpl() {
        
    }

    @Override
    public void confirmEndOfSetUp () {
        endOfSetUp = true;
    }

    @Override
    public boolean isEndOfSetUp () {
        return endOfSetUp;
    }

    private void setPlayerOnTurn () {
        if (!playerOnTurn.getHasTurn()) {
            playerOnTurn = playerOnTurn.getNextPlayer();
        }
    }

    @Override
    public void playerDoesTurn (int xEntry, int yEntry) {
        playerOnTurn.doTurn(xEntry, yEntry);
        setPlayerOnTurn();
    }

    @Override
    public Player getPlayer (int player) {
        if (player == 1) {
            return firstPlayer;
        }
        return firstPlayer.getNextPlayer();
    }

    @Override
    public boolean isPlayersTurn(int player) {
        return getPlayer(player) == playerOnTurn;
    }

	@Override
	public boolean isEndOfGame() {
        return (getPlayer(1).getFleet().isDestroyed() || getPlayer(2).getFleet().isDestroyed());
    }

	@Override
	public int getWinner() {
        if (getPlayer(1).getFleet().isDestroyed()) {
            return Battleship.PLAYER_TWO;
        }
        if (getPlayer(2).getFleet().isDestroyed()) {
            return Battleship.PLAYER_ONE;
        }
        return Battleship.NO_PLAYERS;
    }
}