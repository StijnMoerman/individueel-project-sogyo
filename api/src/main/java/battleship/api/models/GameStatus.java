package battleship.api.models;

import battleship.domain.Battleship;

public class GameStatus {
    boolean endOfGame;
    public boolean getEndOfGame() { return endOfGame; }

    boolean endOfSetUp;
    public boolean getEndOfSetUp() {return endOfSetUp; }
    
    String winner;
    public String getWinner() { return winner; }

    public GameStatus(battleship.domain.Battleship battleship, 
            String namePlayer1, String namePlayer2) {
        this.endOfGame = battleship.isEndOfGame();
        this.endOfSetUp = battleship.isEndOfSetUp();
        int winner = battleship.getWinner();
        if(winner == Battleship.NO_PLAYERS) {
            this.winner = null;
        } else if(winner == Battleship.PLAYER_ONE) {
            this.winner = namePlayer1;
        } else if(winner == Battleship.PLAYER_TWO) {
            this.winner = namePlayer2;
        } else {
            this.winner = namePlayer1  + " and " + namePlayer2;
        }
    }
}