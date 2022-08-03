package battleship.domain;

public class Player {
    private Fleet fleet = new Fleet();
    private Player nextPlayer;
    private PlaceEntry[][] placeMap = new PlaceEntry[10][10];
    private GuessEntry[][] guessMap = new GuessEntry[10][10];
    private boolean hasTurn;

    public Player () {
        nextPlayer = new Player(this);
        hasTurn = true;
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                placeMap[i][j] = new PlaceEntry();
                guessMap[i][j] = new GuessEntry();
            }
        }
    }

    private Player (Player firstPlayer) {
        nextPlayer = firstPlayer;
        hasTurn = false;
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
        return getFleet().getShip(shipEntry);
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

    public boolean getHasTurn() {
        return hasTurn;
    }

    public void getTurn() {
        hasTurn = true;
    }

    public void doTurn (int xEntry, int yEntry) {
        guessMap[xEntry][yEntry].entryGuessed();
        if (nextPlayer.placeMap[xEntry][yEntry].getHasShip()) {
            guessMap[xEntry][yEntry].shipHit();
            nextPlayer.placeMap[xEntry][yEntry].getShip().getHit();
            nextPlayer.getFleet().setDestroyed();
            if (nextPlayer.placeMap[xEntry][yEntry].getShip().isDestroyed()) {
                this.hasTurn = false;
                nextPlayer.getTurn();
            }
        }
        else {
            this.hasTurn = false;
            nextPlayer.getTurn();
        }
    }

    public void placeShip (int shipEntry, int xEntry, int yEntry, String direction) {
        Ship placedShip = getShip(shipEntry);
        boolean correctPlacement = true;
        if (direction.charAt(0) == 'N' && yEntry + 1 >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                if (placeMap[xEntry][yEntry-i].getHasShip()) {
                    correctPlacement = false;
                }
            }
            if (correctPlacement) {
                for (int i = 0; i < placedShip.getLength(); i++) {
                    placeMap[xEntry][yEntry-i].assignShip(getShip(shipEntry));
                }
            }
            placedShip.getPlaced();
            this.fleet.setPlaced();
        }
        else if (direction.charAt(0) == 'S' && 10 - yEntry >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                if (placeMap[xEntry][yEntry+i].getHasShip()) {
                    correctPlacement = false;
                }
            }
            if (correctPlacement) {
                for (int i = 0; i < placedShip.getLength(); i++) {
                    placeMap[xEntry][yEntry+i].assignShip(getShip(shipEntry));
                }
            }
            placedShip.getPlaced();
            this.fleet.setPlaced();
        }
        else if (direction.charAt(0) == 'W' && xEntry + 1 >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                if (placeMap[xEntry-i][yEntry].getHasShip()) {
                    correctPlacement = false;
                }
            }
            if (correctPlacement) {
                for (int i = 0; i < placedShip.getLength(); i++) {
                    placeMap[xEntry-i][yEntry].assignShip(getShip(shipEntry));
                }
            }
            placedShip.getPlaced();
            this.fleet.setPlaced();
        }
        else if (direction.charAt(0) == 'E' && 10 - xEntry >= placedShip.getLength()) {
            for (int i = 0; i < placedShip.getLength(); i++) {
                if (placeMap[xEntry+i][yEntry].getHasShip()) {
                    correctPlacement = false;
                }
            }
            if (correctPlacement) {
                for (int i = 0; i < placedShip.getLength(); i++) {
                    placeMap[xEntry+i][yEntry].assignShip(getShip(shipEntry));
                }
            }
            placedShip.getPlaced();
            this.fleet.setPlaced();
        }
        else {
            throw new ArithmeticException("Invalid placement of boats with direction."
            +" Length: " +placedShip.getLength()
            +" Direction: " +direction
            +" xEntry: " +xEntry
            +" yEntry: " +yEntry);
        }
        if (!correctPlacement) {
            throw new ArithmeticException("This overlaps with another ship. This is against the rules of the game.");
        }
    }


}
