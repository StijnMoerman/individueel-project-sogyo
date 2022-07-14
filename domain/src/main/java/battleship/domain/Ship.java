package battleship.domain;

public class Ship {
    private int length;
    private boolean destroyed = false;
    private int damage = 0;
    private boolean placed = false;

    public int getLength() {
        return length;
    }

    public boolean isPlaced() {
        return placed;
    }

    public boolean isDestroyed () {
        return destroyed;
    }

    public void getPlaced() {
        placed = true;
    }

    public void getHit() {
        this.damage++;
        destroyed = (damage >= length);
    }

    public Ship (int length) {
        this.length = length;
    }
}
