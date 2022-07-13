package battleship.domain;

public class Player {
    private Fleet fleet = new Fleet();
    boolean firstPlayer;
    private Player nextPlayer;
    PlaceEntry[][] placeMap = new PlaceEntry[10][10];
    GuessEntry[][] guessMap = new GuessEntry[10][10];

    public Player () {
        firstPlayer = true;
        nextPlayer = new Player(this);
    }

    private Player (Player firstPlayer) {
        this.firstPlayer = false;
        nextPlayer = firstPlayer;
    }

    public Fleet getFleet() {
        return fleet;
    }
    
    public Player getNextPlayer() {
        return nextPlayer;
    }


}
