package battleship.domain;

public class BattleshipImpl implements Battleship {
    Player firstPlayer = new Player();

    public BattleshipImpl() {
        
    }

    public Player getPlayer (int player) {
        if (player == 1) {
            return firstPlayer;
        }
        return firstPlayer.getNextPlayer();
    }

    @Override
    public boolean isPlayersTurn(int player) {
        return getPlayer(player).hasTurn;
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