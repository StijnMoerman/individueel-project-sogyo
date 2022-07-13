package battleship.domain;

public class PlaceEntry {
    private boolean hasShip = false;
    private Ship ship = null;

    public void assignShip (Ship ship) {
        this.ship = ship;
        hasShip = true;
    }

    public boolean getHasShip () {
        return hasShip;
    }

    public Ship getShip () {
        return ship;
    }
}
