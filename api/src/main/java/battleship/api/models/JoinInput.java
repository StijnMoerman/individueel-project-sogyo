package battleship.api.models;

public class JoinInput {

	String namePlayer;
	String gameID;

	public String getNamePlayer() {
		return namePlayer;
	}

	public void setNamePlayer(String namePlayer) {
		this.namePlayer = namePlayer;
	}

	public String getGameID() {
		return gameID;
	}

	public void setGameID(String gameID) {
		this.gameID = gameID;
	}
}