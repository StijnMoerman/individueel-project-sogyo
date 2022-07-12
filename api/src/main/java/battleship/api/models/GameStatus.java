package battleship.api.models;

public class GameStatus {
    boolean endOfGame;
    public boolean getEndOfGame() { return endOfGame; }
    
    String winner;
    public String getWinner() { return winner; }

    public GameStatus(battleship.domain.Battleship battleship, 
            String namePlayer1, String namePlayer2) {
        this.endOfGame = battleship.isEndOfGame();
        int winner = battleship.getWinner();
        if(winner == battleship.NO_PLAYERS) {
            this.winner = null;
        } else if(winner == battleship.PLAYER_ONE) {
            this.winner = namePlayer1;
        } else if(winner == battleship.PLAYER_TWO) {
            this.winner = namePlayer2;
        } else {
            this.winner = namePlayer1  + " and " + namePlayer2;
        }
    }
}