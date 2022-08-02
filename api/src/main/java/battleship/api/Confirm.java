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

@Path("/confirm")
public class Confirm {
    @POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response confirm(
			@Context HttpServletRequest request,
            boolean endOfSetUp) {


        HttpSession session = request.getSession(true);
        BattleshipImpl battleship = (BattleshipImpl) session.getAttribute("battleship");
        battleship.confirmEndOfSetUp();
        
        session.setAttribute("battleship", battleship);
        
        String namePlayer1 = (String)session.getAttribute("player1");
        String namePlayer2 = (String)session.getAttribute("player2");
		var output = new Battleship(battleship, namePlayer1, namePlayer2);
		return Response.status(200).entity(output).build();
	}
}
