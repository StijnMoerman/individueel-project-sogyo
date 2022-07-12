package battleship.domain;

public class BattleshipImpl implements Battleship {


    public BattleshipImpl() {

    }

    @Override
    public boolean isPlayersTurn(int player) {
        return player == 1;
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