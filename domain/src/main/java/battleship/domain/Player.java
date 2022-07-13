package battleship.domain;

public class Player {
    private Fleet fleet = new Fleet();
    public Fleet getFleet() {
        return fleet;
    }

    public void setFleet(Fleet fleet) {
        this.fleet = fleet;
    }

    boolean firstPlayer;
    boolean hasTurn;
    private Player nextPlayer;
    
    public Player getNextPlayer() {
        return nextPlayer;
    }

    PlaceEntry[][] placeMap;
    GuessEntry[][] guessMap;
    

    public Player () {
        firstPlayer = true;
        hasTurn = true;
        nextPlayer = new Player(this);
    }

    private Player (Player firstPlayer) {
        this.firstPlayer = false;
        hasTurn = false;
        nextPlayer = firstPlayer;
    }
}
