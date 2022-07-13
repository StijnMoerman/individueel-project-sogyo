package battleship.domain;

public class Player {
    Fleet fleet = new Fleet();
    boolean firstPlayer;
    boolean hasTurn;
    Player nextPlayer;
    PlaceEntry[][] placeMap;
    

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
