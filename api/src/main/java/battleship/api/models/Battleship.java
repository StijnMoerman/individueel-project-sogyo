package battleship.api.models;

// This package is a collection of DTO's (data transfer objects).
// A DTO is a simple datastructure which models the
// data your web API sends back to the client. The Java
// objects will be converted to JSON objects.
public class Battleship {
    public Battleship(battleship.domain.Battleship battleship, 
            String namePlayer1, String namePlayer2, String gameID) {
        players = new Player[2];
        players[0] = new Player(battleship, namePlayer1, true);
        players[1] = new Player(battleship, namePlayer2, false);
        gameStatus = new GameStatus(battleship, namePlayer1, namePlayer2);
        this.gameID = gameID;
    }

    String gameID;
    public String getGameID() {return gameID; }

    Player[] players;
    public Player[] getPlayers() { return players; }
    
    GameStatus gameStatus;
    public GameStatus getGameStatus() { return gameStatus; }
}