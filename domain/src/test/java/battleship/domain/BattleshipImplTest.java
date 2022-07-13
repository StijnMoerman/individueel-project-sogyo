package battleship.domain;

// Your test class should be in the same
// package as the class you're testing.
// Usually the test directory mirrors the
// main directory 1:1. So for each class in src/main,
// there is a class in src/test.

// Import our test dependencies. We import the Test-attribute
// and a set of assertions.
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class BattleshipImplTest {
    @Test
    public void beginGameNotEnd() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertFalse( Battleship.isEndOfGame());
    }

    @Test
    public void firstTurnOfPlayerOne() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertTrue(Battleship.isPlayersTurn(1));
    }

    @Test
    public void firstTurnNotOfPlayerTwo() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertFalse(Battleship.isPlayersTurn(2));
    }

    @Test
    public void noWinnerYet() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertEquals(0,Battleship.getWinner());
    }

    @Test
    public void noShipDestroyedYet() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertFalse(Battleship.getPlayer(1).getFleet().ships[0].getDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[1].getDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[2].getDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[3].getDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[4].getDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[0].getDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[1].getDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[2].getDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[3].getDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[4].getDestroyed());
    }



}