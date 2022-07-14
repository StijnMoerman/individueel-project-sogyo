package battleship.domain;

public class Ship {
    private int length;
    private boolean destroyed = false;
    private int damage = 0;

    public int getLength() {
        return length;
    }

    public void getHit() {
        this.damage++;
        destroyed = (damage >= length);
    }

    public boolean getDestroyed () {
        return destroyed;
    }

    public Ship (int length) {
        this.length = length;
    }
}
