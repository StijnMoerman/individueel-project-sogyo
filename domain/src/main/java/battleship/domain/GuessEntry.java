package battleship.domain;

public class GuessEntry {
    private boolean guessed = false;
    private boolean hit = false;

    public boolean getGuessed () {
        return guessed;
    }
    
    public void entryGuessed () {
        guessed = true;
    }
    
    public boolean getHit () {
        return hit;
    }
    
    public void boatHit () {
        hit = true;
    }
    
}
