package battleship.api.models;

public class SetUpMapEntry {
    public SetUpMapEntry(battleship.domain.Battleship battleship, int x, int y, int player) {
        hasBoat = battleship.getPlayer(player).getPlaceMap()[x][y].getHasShip();
        available = !hasBoat;
    }
    
    boolean hasBoat;
    public boolean getHasBoat() { return hasBoat; }

    boolean available;
    public boolean getAvailable() { return available; }

}
