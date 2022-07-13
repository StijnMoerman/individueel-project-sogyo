package battleship.domain;

public class BattleshipImpl implements Battleship {
    Player firstPlayer = new Player();

    public BattleshipImpl() {
        
    }

    public Player getPlayer (int player) {
        if (player == 1) {
            return firstPlayer;
        }
        return firstPlayer.nextPlayer;
    }

    @Override
    public boolean isPlayersTurn(int player) {
        return getPlayer(player).hasTurn;
    }

	@Override
	public boolean isEndOfGame() {
        return false;
    }

	@Override
	public int getWinner() {
        return Battleship.NO_PLAYERS;
    }
}