package battleship.api.models;

public class Fleet {
    public Fleet (battleship.domain.Battleship battleship, int player) {
        for (int i = 0; i < 5; i++) {
            boats[i] = new Boat(i, battleship, player);
        }
    }

    Boat[] boats = new Boat[5];
    public Boat[] getBoats () { return boats; }
    
    boolean placed;
    public boolean getPlaced () { return placed; }
}
