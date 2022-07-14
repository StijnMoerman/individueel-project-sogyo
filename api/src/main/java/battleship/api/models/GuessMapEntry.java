package battleship.api.models;

public class GuessMapEntry {
    public GuessMapEntry(battleship.domain.Battleship battleship, int x, int y, int player) {
        if (!battleship.getPlayer(player).getGuessMap()[x][y].getGuessed()) {
            status = "unknown";
        }
        else if (!battleship.getPlayer(player).getGuessMap()[x][y].getHit()) {
            status = "miss";
        }
        else if (battleship.getPlayer(player).getNextPlayer().getPlaceMap()[x][y].getShip().isDestroyed()) {
            status = "sunk";
        }
        else {
            status = "hit";
        }
    }
    
    String status;
    public String getStatus() { return status; }
    
}
