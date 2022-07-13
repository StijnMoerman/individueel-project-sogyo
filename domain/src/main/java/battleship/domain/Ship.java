package battleship.domain;

public class Ship {
    int length;
    private boolean destroyed = false;
    private int damage = 0;

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
