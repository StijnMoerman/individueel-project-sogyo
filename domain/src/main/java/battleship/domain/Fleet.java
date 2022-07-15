package battleship.domain;

public class Fleet {
    Ship ships[] = new Ship[5];
    private boolean destroyed = false;
    private boolean placed = false;

    public boolean isDestroyed() {
        return destroyed;
    }

    public boolean isPlaced() {
        return placed;
    }

    public Ship getShip (int shipIndex) {
        return ships[shipIndex];
    }

    public void setDestroyed() {
        boolean maybeDestroyed = true;
        for (int i = 0; i < ships.length; i++) {
            if (!this.ships[i].isDestroyed()) {
                maybeDestroyed = false;
            }
        }
        destroyed = maybeDestroyed;
    }

    public void setPlaced() {
        boolean maybePlaced = true;
        for (int i = 0; i < ships.length; i++) {
            if (!this.ships[i].isPlaced()) {
                maybePlaced = false;
            }
        }
        placed = maybePlaced;
    }

    public Fleet() {
        this.ships[0] = new Ship(5);
        this.ships[1] = new Ship(4);
        this.ships[2] = new Ship(3);
        this.ships[3] = new Ship(3);
        this.ships[4] = new Ship(2);
    }
}
