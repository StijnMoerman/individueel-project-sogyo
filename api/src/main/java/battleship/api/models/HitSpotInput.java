package battleship.api.models;

public class HitSpotInput {
    
    String gameID; 
    int xEntry;
    int yEntry;
    int playerIndex;

    public String getGameID() {
        return gameID;
    }

    public void setGameID(String gameID) {
        this.gameID = gameID;
    }

    public int getxEntry() {
        return xEntry;
    }

    public void setxEntry(int xEntry) {
        this.xEntry = xEntry;
    }

	public int getyEntry() {
        return yEntry;
    }

    public void setyEntry(int yEntry) {
        this.yEntry = yEntry;
    }

	public int getPlayerIndex() {
        return playerIndex;
    }

    public void setPlayerIndex(int playerIndex) {
        this.playerIndex = playerIndex;
    }

}
