package battleship.api.models;

public class HitSpotInput {
    
    int playerIndex;
    int xEntry;
    int yEntry;

    public int getPlayerIndex() {
		return playerIndex;
	}

	public void setPlayerIndex(int playerIndex) {
		this.playerIndex = playerIndex;
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
