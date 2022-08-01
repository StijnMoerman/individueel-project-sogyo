package battleship.domain;

public class Player {
    private Fleet fleet = new Fleet();
    boolean firstPlayer;
    private Player nextPlayer;
    private PlaceEntry[][] placeMap = new PlaceEntry[10][10];
    private GuessEntry[][] guessMap = new GuessEntry[10][10];

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

    public Ship getShip (int shipEntry) {
        return getFleet().ships[shipEntry];
    }
    
    public Player getNextPlayer() {
        return nextPlayer;
    }

    public PlaceEntry[][] getPlaceMap () {
        return placeMap;
    }

    public GuessEntry[][] getGuessMap () {
        return guessMap;
    }

    public void doTurn (int xEntry, int yEntry) {
        guessMap[xEntry][yEntry].entryGuessed();
        if (nextPlayer.placeMap[xEntry][yEntry].getHasShip()) {
            guessMap[xEntry][yEntry].shipHit();
            nextPlayer.placeMap[xEntry][yEntry].getShip().getHit();
            nextPlayer.getFleet().setDestroyed();
        }
    }

    public void placeShip (int shipEntry, int xEntry, int yEntry, String direction) {
        Ship placedShip = getShip(shipEntry);
        if (direction.charAt(0) == 'N' && yEntry + 1 >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                placeMap[xEntry][yEntry-i].assignShip(getShip(shipEntry));
            }
            placedShip.getPlaced();
        }
        else if (direction.charAt(0) == 'S' && 10 - yEntry >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                placeMap[xEntry][yEntry+i].assignShip(getShip(shipEntry));
            }
            placedShip.getPlaced();
        }
        else if (direction.charAt(0) == 'W' && xEntry + 1 >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                placeMap[xEntry-i][yEntry].assignShip(getShip(shipEntry));
            }
            placedShip.getPlaced();
        }
        else if (direction.charAt(0) == 'E' && 10 - xEntry >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                placeMap[xEntry+i][yEntry].assignShip(getShip(shipEntry));
            }
            placedShip.getPlaced();
        }
        else {
            throw new ArithmeticException("Invalid placement of boats with direction."
            +" Length: " +placedShip.getLength()
            +" Direction: " +direction
            +" xEntry: " +xEntry
            +" yEntry: " +yEntry);
        }
    }


}
