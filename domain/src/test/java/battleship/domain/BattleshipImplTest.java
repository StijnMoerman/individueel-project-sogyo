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
        assertFalse( Battleship.isEndOfSetUp());
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
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(0).isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(1).isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(2).isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(3).isDestroyed());
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(4).isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().getShip(0).isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().getShip(1).isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().getShip(2).isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().getShip(3).isDestroyed());
        assertFalse(Battleship.getPlayer(2).getFleet().getShip(4).isDestroyed());
    }

    @Test
    public void testShipLength() {
        BattleshipImpl Battleship = new BattleshipImpl();
        assertEquals(5,Battleship.getPlayer(1).getFleet().getShip(0).getLength());
        assertEquals(2,Battleship.getPlayer(2).getFleet().getShip(4).getLength());
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
        Battleship.getPlayer(1).getFleet().getShip(0).getHit();
        assertFalse(Battleship.getPlayer(1).getFleet().getShip(0).isDestroyed());
    }

    @Test
    public void testDestroyFifthBoatFirstPlayer() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).getFleet().getShip(4).getHit();
        Battleship.getPlayer(1).getFleet().getShip(4).getHit();
        assertTrue(Battleship.getPlayer(1).getFleet().getShip(4).isDestroyed());
    }

    @Test
    public void testAssigningShips() {
        BattleshipImpl Battleship = new BattleshipImpl();
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().getShip(0);
        leftUpperPlaceEntryPlayerOne.assignShip(largestBoatPlayerOne);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testGuessingShips() {
        BattleshipImpl Battleship = new BattleshipImpl();
        PlaceEntry leftUpperPlaceEntryPlayerTwo = Battleship.getPlayer(2).getPlaceMap()[0][0];
        GuessEntry leftUpperGuessEntryPlayerOne = Battleship.getPlayer(1).getGuessMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(2).getFleet().getShip(0);

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
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().getShip(0);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsEast() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"East");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().getShip(0);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsNorth() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,4,"North");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().getShip(0);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsSouth() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"South");
        PlaceEntry leftUpperPlaceEntryPlayerOne = Battleship.getPlayer(1).getPlaceMap()[0][0];
        Ship largestBoatPlayerOne = Battleship.getPlayer(1).getFleet().getShip(0);
        assertTrue(leftUpperPlaceEntryPlayerOne.getHasShip());
        assertEquals(largestBoatPlayerOne,leftUpperPlaceEntryPlayerOne.getShip());
    }

    @Test
    public void testPlaceShipsIncorrectly() {
        BattleshipImpl Battleship = new BattleshipImpl();
        try {
            Battleship.getPlayer(1).placeShip(0,0,0,"North");
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
        try {
            Battleship.getPlayer(1).placeShip(0,0,0,"West");
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
        try {
            Battleship.getPlayer(1).placeShip(0,9,9,"South");
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
        try {
            Battleship.getPlayer(1).placeShip(0,9,9,"East");
        } catch (ArithmeticException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void fleetPlacedWhenAllShipsPlaced() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"South");
        Battleship.getPlayer(1).placeShip(1,1,0,"South");
        Battleship.getPlayer(1).placeShip(2,2,0,"South");
        Battleship.getPlayer(1).placeShip(3,3,0,"South");
        Battleship.getPlayer(1).placeShip(4,4,0,"South");
        assertTrue(Battleship.getPlayer(1).getFleet().isPlaced());
    }

    @Test
    public void playerOneFleetDestroyed() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(1).placeShip(0,0,0,"South");
        Battleship.getPlayer(1).placeShip(1,1,0,"South");
        Battleship.getPlayer(1).placeShip(2,2,0,"South");
        Battleship.getPlayer(1).placeShip(3,3,0,"South");
        Battleship.getPlayer(1).placeShip(4,4,0,"South");
        Battleship.getPlayer(2).doTurn(0,0);
        Battleship.getPlayer(2).doTurn(0,1);
        Battleship.getPlayer(2).doTurn(0,2);
        Battleship.getPlayer(2).doTurn(0,3);
        Battleship.getPlayer(2).doTurn(0,4);
        Battleship.getPlayer(2).doTurn(1,0);
        Battleship.getPlayer(2).doTurn(1,1);
        Battleship.getPlayer(2).doTurn(1,2);
        Battleship.getPlayer(2).doTurn(1,3);
        Battleship.getPlayer(2).doTurn(2,0);
        Battleship.getPlayer(2).doTurn(2,1);
        Battleship.getPlayer(2).doTurn(2,2);
        Battleship.getPlayer(2).doTurn(3,0);
        Battleship.getPlayer(2).doTurn(3,1);
        Battleship.getPlayer(2).doTurn(3,2);
        Battleship.getPlayer(2).doTurn(4,0);
        Battleship.getPlayer(2).doTurn(4,1);
        assertTrue(Battleship.getPlayer(1).getFleet().getShip(1).isDestroyed());
        assertTrue(Battleship.getPlayer(1).getFleet().isDestroyed());
        assertTrue(Battleship.isEndOfGame());
        assertEquals(2,Battleship.getWinner());
    }

    @Test
    public void playerTwoFleetDestroyed() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(2).placeShip(0,0,0,"South");
        Battleship.getPlayer(2).placeShip(1,1,0,"South");
        Battleship.getPlayer(2).placeShip(2,2,0,"South");
        Battleship.getPlayer(2).placeShip(3,3,0,"South");
        Battleship.getPlayer(2).placeShip(4,4,0,"South");
        Battleship.getPlayer(1).doTurn(0,0);
        Battleship.getPlayer(1).doTurn(0,1);
        Battleship.getPlayer(1).doTurn(0,2);
        Battleship.getPlayer(1).doTurn(0,3);
        Battleship.getPlayer(1).doTurn(0,4);
        Battleship.getPlayer(1).doTurn(1,0);
        Battleship.getPlayer(1).doTurn(1,1);
        Battleship.getPlayer(1).doTurn(1,2);
        Battleship.getPlayer(1).doTurn(1,3);
        Battleship.getPlayer(1).doTurn(2,0);
        Battleship.getPlayer(1).doTurn(2,1);
        Battleship.getPlayer(1).doTurn(2,2);
        Battleship.getPlayer(1).doTurn(3,0);
        Battleship.getPlayer(1).doTurn(3,1);
        Battleship.getPlayer(1).doTurn(3,2);
        Battleship.getPlayer(1).doTurn(4,0);
        Battleship.getPlayer(1).doTurn(4,1);
        assertTrue(Battleship.getPlayer(2).getFleet().getShip(1).isDestroyed());
        assertTrue(Battleship.getPlayer(2).getFleet().isDestroyed());
        assertTrue(Battleship.isEndOfGame());
        assertEquals(1,Battleship.getWinner());
    }

    @Test
    public void testTurnSwitch() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.getPlayer(2).placeShip(0,0,0,"South");
        Battleship.getPlayer(2).placeShip(1,1,0,"South");
        Battleship.getPlayer(2).placeShip(2,2,0,"South");
        Battleship.getPlayer(2).placeShip(3,3,0,"South");
        Battleship.getPlayer(2).placeShip(4,4,0,"South");
        assertTrue(Battleship.isPlayersTurn(1));
        Battleship.playerDoesTurn(0,0);
        assertTrue(Battleship.isPlayersTurn(1));
        Battleship.playerDoesTurn(7,9);
        assertTrue(Battleship.isPlayersTurn(2));
    }

    @Test
    public void testEndOfSetUp() {
        BattleshipImpl Battleship = new BattleshipImpl();
        Battleship.confirmEndOfSetUp();
        assertTrue(Battleship.isEndOfSetUp());
    }


}