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


@Path("/hitspot")
public class HitSpot {
    @POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response hitspot(
			@Context HttpServletRequest request, 
			HitSpotInput hitSpotInput) {

        int xEntry = hitSpotInput.getxEntry();
        int yEntry = hitSpotInput.getyEntry();

        HttpSession session = request.getSession(true);
        BattleshipImpl battleship = (BattleshipImpl) session.getAttribute("battleship");
        
        battleship.playerDoesTurn(xEntry, yEntry);
        session.setAttribute("battleship", battleship);
        
        String namePlayer1 = (String)session.getAttribute("player1");
        String namePlayer2 = (String)session.getAttribute("player2");
		var output = new Battleship(battleship, namePlayer1, namePlayer2);
		return Response.status(200).entity(output).build();
	}
}
