package battleship.api.models;

public class PlaceShipInput {
    
    String gameID; 
    int playerIndex;
    int shipIndex;
    String direction;
    int xEntry;
    int yEntry;

    public String getGameID() {
        return gameID;
    }

    public void setGameID(String gameID) {
        this.gameID = gameID;
    }

    public int getPlayerIndex() {
		return playerIndex;
	}

	public void setPlayerIndex(int playerIndex) {
		this.playerIndex = playerIndex;
	}

    public int getShipIndex() {
        return shipIndex;
    }

    public void setShipIndex(int shipIndex) {
        this.shipIndex = shipIndex;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
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

}
