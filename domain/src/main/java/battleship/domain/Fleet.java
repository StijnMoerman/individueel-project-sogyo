package battleship.domain;

public class Fleet {
    Ship[] ships;
    boolean destroyed = false;

    public Fleet() {
        this.ships[0] = new Ship(5);
        this.ships[1] = new Ship(4);
        this.ships[2] = new Ship(3);
        this.ships[3] = new Ship(3);
        this.ships[4] = new Ship(2);
    }
}
