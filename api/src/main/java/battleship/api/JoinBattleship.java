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

@Path("/join")
public class JoinBattleship {
    @POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response initialize(
			@Context HttpServletRequest request, 
			JoinInput joinInput) {
		String namePlayer = joinInput.getNamePlayer();
		String gameID = joinInput.getGameID();
		
        HttpSession session = request.getSession(true);
        BattleshipImpl battleship = (BattleshipImpl) session.getAttribute(gameID +"-battleship");
        String namePlayer1 = (String) session.getAttribute(gameID+"-player1");
        session.setAttribute(gameID+"-battleship", battleship);
        session.setAttribute(gameID+"-player2", namePlayer);

		var output = new Battleship(battleship, namePlayer1, namePlayer,gameID,2);
		return Response.status(200).entity(output).build();
	}
}
