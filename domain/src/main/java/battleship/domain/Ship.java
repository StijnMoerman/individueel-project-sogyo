package battleship.domain;

public class Ship {
    int length;
    boolean destroyed = false;
    int damage = 0;

    public Ship (int length) {
        this.length = length;
    }
}
