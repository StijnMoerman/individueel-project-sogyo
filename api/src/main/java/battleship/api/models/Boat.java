package battleship.api.models;

public class Boat {
    public Boat (int boatIndex, battleship.domain.Battleship battleship, int player) {
        length = battleship.getPlayer(player).getFleet().getShip(boatIndex).getLength();
        placed = battleship.getPlayer(player).getFleet().getShip(boatIndex).isPlaced();
    }

    int length;
    public int getLength () { return length; }
    
    boolean placed;
    public boolean getPlaced () { return placed; }
    
}
