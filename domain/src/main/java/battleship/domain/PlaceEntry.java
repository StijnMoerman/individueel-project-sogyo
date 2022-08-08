package battleship.domain;

public class PlaceEntry {
    private boolean hasShip = false;
    private Ship ship = null;
    private boolean available = true;

    public void assignShip (Ship ship) {
        this.ship = ship;
        hasShip = true;
        available = false;
    }

    public boolean getHasShip () {
        return hasShip;
    }

    public boolean getAvailable () {
        return available;
    }

    public void setUnavailable () {
        this.available = false;
    }

    public Ship getShip () {
        return ship;
    }
}
