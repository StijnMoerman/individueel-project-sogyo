package battleship.api;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.core.Response;
import battleship.api.models.*;
import battleship.domain.BattleshipImpl;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class StartBattleshipTest {
    @Test
    public void startingBattleshipShouldBeAllowed() {
        var response = startBattleship("Mario");
        assertEquals(200, response.getStatus());
    }

    @Test
    public void startingBattleshipReturnsAGameWithoutAWinner() {
        var response = startBattleship("Mario");
        var entity = (Battleship)response.getEntity();
        var gameState = entity.getGameStatus();
        assertFalse(gameState.getEndOfGame());
        assertFalse(gameState.getEndOfSetUp());
        assertNull(gameState.getWinner());
    }

    @Test
    public void startingBattleshipReturnsThePlayerData() {
        var response = startBattleship("Mario");
        var entity = (Battleship)response.getEntity();
        var players = entity.getPlayers();
        assertEquals(2, players.length);
        assertEquals("Mario", players[0].getName());
        assertEquals("", players[1].getName());
        assertTrue(players[0].getHasTurn());
        assertFalse(players[1].getHasTurn());
        assertEquals("player1", players[0].getType());
        assertEquals("player2", players[1].getType());
        assertFalse(players[0].getFleet().getPlaced());
        assertFalse(players[0].getFleet().getBoats()[0].getPlaced());
        assertEquals(5,players[0].getFleet().getBoats()[0].getLength());
        assertTrue(players[0].getSetUpMap()[0][0].getAvailable());
        assertFalse(players[0].getSetUpMap()[0][0].getHasBoat());
        assertEquals("unknown", players[0].getGuessMap()[0][0].getStatus());
    }

    @Test
    public void startingBattleshipStartsANewSession() {
        startBattleship("Mario");
        verify(request).getSession(true);
    }

    @Test
    public void startingBattleshipSavesTheNewGameInASession() {
        startBattleship("Mario");
        verify(session).setAttribute(eq("battleship"), any(BattleshipImpl.class));
    }

    @Test
    public void startingBattleshipSavesTheNamesInASession() {
        startBattleship("Wario");
        verify(session).setAttribute("player1", "Wario");
    }

    private Response startBattleship(String namePlayer1) {
        var servlet = new StartBattleship();
        var request = createRequestContext();
        var input = startInput(namePlayer1);
        return servlet.initialize(request, input);
    }

    private HttpServletRequest createRequestContext() {
        request = mock(HttpServletRequest.class);
        session = mock(HttpSession.class);
        when(request.getSession(true)).thenReturn(session);
        return request;
    }

    private HttpServletRequest request;
    private HttpSession session;

    private StartInput startInput(String namePlayer) {
        var input = new StartInput();
        input.setNamePlayer(namePlayer);
        return input;
    }
}