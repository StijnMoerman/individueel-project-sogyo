package battleship.api.models;

public class SetUpMapEntry {
    public SetUpMapEntry(battleship.domain.Battleship battleship, int x, int y, int player) {
        if (battleship.getPlayer(player).getPlaceMap()[x][y].getHasShip()) {
            status = "occupied";
        }
        else if (battleship.getPlayer(player).getPlaceMap()[x][y].getAvailable()) {
            status = "available";
        }
        else {
            status = "unavailable";
        }
    }
    
    String status;
    public String getStatus() { return status; }
    
}
