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
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                placeMap[i][j] = new PlaceEntry();
                guessMap[i][j] = new GuessEntry();
            }
        }
    }

    private Player (Player firstPlayer) {
        this.firstPlayer = false;
        nextPlayer = firstPlayer;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                placeMap[i][j] = new PlaceEntry();
                guessMap[i][j] = new GuessEntry();
            }
        }
    }

    public Fleet getFleet() {
        return fleet;
    }
    
    public Player getNextPlayer() {
        return nextPlayer;
    }

    public void doTurn (int xEntry, int yEntry) {
        guessMap[xEntry][yEntry].entryGuessed();
        if (nextPlayer.placeMap[xEntry][yEntry].getHasShip()) {
            guessMap[xEntry][yEntry].shipHit();
            nextPlayer.placeMap[xEntry][yEntry].getShip().getHit();
            nextPlayer.getFleet().setDestroyed();
        }
    }


}
