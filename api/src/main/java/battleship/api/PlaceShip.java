package battleship.api;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import battleship.api.models.*;
import battleship.domain.BattleshipImpl;

@Path("/placeship")
public class PlaceShip {
    @POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response placeship(
			@Context HttpServletRequest request, 
			PlaceShipInput placeShipInput) {

        String gameID = placeShipInput.getGameID();
        int playerIndex = placeShipInput.getPlayerIndex();
        int shipIndex = placeShipInput.getShipIndex();
        String direction = placeShipInput.getDirection();
        int xEntry = placeShipInput.getxEntry();
        int yEntry = placeShipInput.getyEntry();
        HttpSession session = request.getSession(true);
        BattleshipImpl battleship = (BattleshipImpl) session.getAttribute(gameID+"-battleship");
        
        battleship.getPlayer(playerIndex).placeShip(shipIndex, xEntry, yEntry, direction);
        session.setAttribute(gameID+"-battleship", battleship);
        
        String namePlayer1 = (String)session.getAttribute(gameID+"-player1");
        String namePlayer2 = (String)session.getAttribute(gameID+"-player2");
		var output = new Battleship(battleship, namePlayer1, namePlayer2, gameID,playerIndex);
		return Response.status(200).entity(output).build();
	}
}
