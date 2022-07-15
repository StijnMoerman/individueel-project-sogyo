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
        assertFalse(Battleship.getPlayer(1).getFleet().ships[0].isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[1].isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[2].isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[3].isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().ships[4].isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[0].isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[1].isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[2].isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[3].isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().ships[4].isDestroyed());
    }

    @Test
    public void testShipLength() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertEquals(5,Battleship.getPlayer(1).getFleet().ships[0].getLength());
        assertEquals(2,Battleship.getPlayer(2).getFleet().ships[4].getLength());
    }

    @Test
    public void placeMapStillEmpty() {
        BattleshipImpl Battleship = new BattleshipImpl();
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        assertFalse(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertNull(leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void guessMapStillEmpty() {
        BattleshipImpl Battleship = new BattleshipImpl();
        GuessEntry leftUpperGuessEntryPlayerOne = Battleship.getPlayer(1).getGuessMap()[0][0];
        assertFalse(leftUpperGuessEntryPlayerOne.getGuessed());
        assertFalse(leftUpperGuessEntryPlayerOne.getHit());
    }

    @Test
    public void testHitFirstBoatFirstPlayer() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).getFleet().ships[0].getHit();
        assertFalse(Battleship.getPlayer(1).getFleet().ships[0].isDestroyed());
    }

    @Test
    public void testDestroyFifthBoatFirstPlayer() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).getFleet().ships[4].getHit();
        Battleship.getPlayer(1).getFleet().ships[4].getHit();
        assertTrue(Battleship.getPlayer(1).getFleet().ships[4].isDestroyed());
    }

    @Test
    public void testAssigningShips() {
        BattleshipImpl Battleship = new BattleshipImpl();
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().ships[0];
        leftUpperPlaceEntryPlayerOne.assignShip(largestBoatPlayerOne);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testGuessingShips() {
        BattleshipImpl Battleship = new BattleshipImpl();
        PlaceEntry leftUpperPlaceEntryPlayerTwo = Battleship.getPlayer(2).getPlaceMap()[0][0];
        GuessEntry leftUpperGuessEntryPlayerOne = Battleship.getPlayer(1).getGuessMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(2).getFleet().ships[0];

        leftUpperPlaceEntryPlayerTwo.assignShip(largestBoatPlayerOne);
        Battleship.getPlayer(1).doTurn(0, 0);

        assertTrue(leftUpperGuessEntryPlayerOne.getGuessed());
        assertTrue(leftUpperGuessEntryPlayerOne.getHit());
    }

    @Test
    public void testPlaceShipsWest() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,4,0,"West");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().ships[0];
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsEast() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"East");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().ships[0];
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsNorth() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,4,"North");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().ships[0];
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsSouth() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"South");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().ships[0];
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }



}